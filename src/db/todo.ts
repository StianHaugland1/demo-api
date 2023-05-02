import { randomUUID } from "crypto";
import { Todo } from "../types/Todo";

const todos: Todo[] = [
  { id: "21c7bf91-ec82-4db9-b4df-f7b6eab757a4", title: "Vask bilen", completed: false },
  { id: "dcb1435c-f8eb-4b8c-ba0d-187061c29c22", title: "Rydd huset", completed: false },
  { id: "89e1cb4b-bb2e-4819-bd76-e97089ad68a8", title: "Gå en tur", completed: false },
  { id: "91353a97-a183-4900-b2a0-a3cea4147756", title: "Les en bok", completed: false },
];

const findTodoIndex = (id: string) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return;
  return index;
};

export const getTodos = () => todos;

export const getTodoById = (id: string) => todos.find(todo => todo.id === id);

export const addTodo = (title: string, completed = false) => {
  const newTodo = { id: randomUUID(), title, completed };
  todos.push(newTodo);
  return newTodo;
};

export const completeTodo = (id: string) => {
  const index = findTodoIndex(id);
  if (index === undefined) return;
  const todo = todos[index];
  const completedTodo = { ...todo, completed: true };
  todos.splice(index, 1, completedTodo);
  return completedTodo;
};

export const deleteTodo = (id: string) => {
  const index = findTodoIndex(id);
  if (index === undefined) return;
  const deletedTodo = todos[index];
  todos.splice(index, 1);
  return deletedTodo;
};
