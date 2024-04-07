import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  upDateval: "",
  checkUpdate: Boolean,
  addTodo: () => {},
  delTodo: () => {},
  setTodos: () => {},
  setupDateval: () => {},
  setcheckUpdate: () => {},
});
