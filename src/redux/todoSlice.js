import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),   
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
  },
    deleteAllTodos: (state) => {
      state.todos = [];
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
  }
}
});

export const { addTodo, deleteTodo, toggleTodo, deleteAllTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
