import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    }, //Note  you have always access of this two, its a syntax (state: aage jake change ho jayegi but abhi uss state kya value hai uska access degi ,hand to hand sitution state dega )
    removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  }
});

export const {addTodo,removeTodo} = todoSlice.actions   //second step export 

export default todoSlice.reducer

