import { z } from "zod";

export const Todo = z.object({
  id: z.string().uuid(),
  title: z.string(),
  completed: z.boolean(),
});

export type Todo = z.infer<typeof Todo>;
