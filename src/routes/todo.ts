import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Todo } from "../types/Todo";
import {
  getTodos,
  getTodoById,
  addTodo,
  completeTodo,
  deleteTodo,
} from "../db/todo";
import { t, router } from "../trpc";
import {
  validTokenAndScopeProcedure,
  validTokenProcedure,
} from "../middleware/auth";

const publicProcedure = t.procedure;

const protectedProcedure = validTokenAndScopeProcedure([]);
const readProcedure = validTokenAndScopeProcedure(["read:todos"]);
const editProcedure = validTokenAndScopeProcedure(["edit:todos"]);
const editDeleteProcedure = validTokenAndScopeProcedure([
  "edit:todos",
  "delete:todos",
]);

export const todoRouter = router({
  // getTodos: "/todos"
  // TODO
  getTodos: publicProcedure
    .meta({ openapi: { method: "GET", path: "/todos" } })
    .input(z.void())
    .output(z.array(Todo))
    .query(() => {
      return getTodos();
    }),

  // getTodo "/todos/{id}"
  // TODO
  getTodo: readProcedure
    .meta({ openapi: { method: "GET", path: "/todos/{id}", protect: true } })
    .input(z.object({ id: Todo.shape.id }))
    .output(Todo)
    .query(req => {
      const todo = getTodoById(req.input.id);
      if (!todo) throw new TRPCError({ code: "NOT_FOUND" });
      return todo;
    }),

  // addTodo: "/todos"
  // TODO
  addTodo: protectedProcedure
    .meta({ openapi: { method: "POST", path: "/todos", protect: true } })
    .input(
      z.object({ title: Todo.shape.title, completed: z.boolean().optional() }),
    )
    .output(z.object({ message: z.string(), todo: Todo }))
    .mutation(req => {
      const addedTodo = addTodo(req.input.title, req.input.completed);
      return { message: "Todo added", todo: addedTodo };
    }),

  // completeTodo: "/todos/{id}"
  // TODO
  completeTodo: editProcedure
    .meta({ openapi: { method: "PUT", path: "/todos/{id}", protect: true } })
    .input(z.object({ id: Todo.shape.id }))
    .output(z.object({ message: z.string(), todo: Todo }))
    .mutation(req => {
      const completedTodo = completeTodo(req.input.id);
      if (!completedTodo)
        throw new TRPCError({ code: "NOT_FOUND", message: "Todo not found" });
      return { message: "Todo completed", todo: completedTodo };
    }),

  // deleteTodo "/todos/{id}"
  // TODO
  deleteTodo: editDeleteProcedure
    .meta({ openapi: { method: "DELETE", path: "/todos/{id}", protect: true } })
    .input(z.object({ id: Todo.shape.id }))
    .output(z.object({ message: z.string(), todo: Todo }))
    .mutation(req => {
      const deletedTodo = deleteTodo(req.input.id);
      if (!deletedTodo) throw new TRPCError({ code: "NOT_FOUND" });
      return { message: "Todo deleted", todo: deletedTodo };
    }),
});
