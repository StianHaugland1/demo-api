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

const readProcedure = validTokenAndScopeProcedure(["read:todos"]);
const editProcedure = validTokenAndScopeProcedure(["edit:todos"]);
const deleteProcedure = validTokenAndScopeProcedure(["delete:todos"]);

export const todoRouter = router({
  // getTodos: "/todos"
  // TODO
  
  // getTodo "/todos/{id}"
  // TODO

  // addTodo: "/todos"
  // TODO
  
  // completeTodo: "/todos/{id}"
  // TODO
  
  // deleteTodo "/todos/{id}"
  // TODO
});
