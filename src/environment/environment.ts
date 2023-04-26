import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const { AUTH0_ISSUER_BASE_URL } = process.env;
export const { BASE_URL } = process.env || "http://localhost";

if (!AUTH0_ISSUER_BASE_URL) {
  console.error("AUTH0_ISSUER_BASE_URL is missing");
  process.exit(1);
}
