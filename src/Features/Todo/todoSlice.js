import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  checkUpdate: {
    status: false,
  },
  getInput: {
    data: "",
  },
  getId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },

    removeTodo: (state, action) => {
      const newTodoArr = state.todos.filter((e, id) => e.id !== action.payload);
      state.todos = newTodoArr;
    },

    updateTodo: (state, action) => {
      const arr = JSON.parse(JSON.stringify(state.todos)); // to get actual value of array
      const updateArr = arr.filter((e) => e.id === state.getId)[0];
      const Index = arr.indexOf(updateArr);
      const toUpdate = { ...updateArr, text: action.payload };
      state.todos[Index] = toUpdate;
    },

    changeUpdate: (state, action) => {
      state.checkUpdate.status = action.payload;
    },

    changeInputData: (state, action) => {
      state.getInput.data = action.payload;
    },

    setIndex: (state, action) => {
      state.getId = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  changeUpdate,
  changeInputData,
  updateTodo,
  setIndex,
} = todoSlice.actions; // for components to use

export default todoSlice.reducer; //for store to use
