import jwksClient from "jwks-rsa";
import { JwtPayload, verify } from "jsonwebtoken";
import { TRPCError } from "@trpc/server";
import { t } from "../trpc";
import { AUTH0_ISSUER_BASE_URL } from "../environment/environment";

const client = jwksClient({
  jwksUri: `${AUTH0_ISSUER_BASE_URL}/.well-known/jwks.json`,
});

const isAuthed = t.middleware(async ({ next, ctx }) => {
  if (!ctx.token)
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Bearer token missing",
    });

  try {
    const signingKey = await client.getSigningKey(ctx.kid);
    const pubKey = signingKey.getPublicKey();
    const decodedToken = verify(ctx.token, pubKey) as JwtPayload;
    const scopes = decodedToken?.scope?.split(" ");

    return next({
      ctx: {
        ...ctx,
        scopes: scopes || [],
      },
    });
  } catch (error) {
    console.error(error);
    throw new TRPCError({ code: "UNAUTHORIZED", message: `Invalid token` });
  }
});

const validateScopes = (requiredScopes: string[]) => {
  return t.middleware(async ({ next, ctx }) => {
    const validScopes = requiredScopes.every((scope) => ctx.scopes?.includes(scope))
    if(!validScopes) throw new TRPCError({ code: "FORBIDDEN", message: "invalid scopes"})
    
    return next();
  })
};

export const validTokenAndScopeProcedure = (requiredScopes: string[]) => {
  const middleware = isAuthed.unstable_pipe(validateScopes(requiredScopes));
  return t.procedure.use(middleware);
};

export const validTokenProcedure = t.procedure.use(isAuthed)
