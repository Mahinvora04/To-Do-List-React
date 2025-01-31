import { create } from "zustand";
import axios from "axios";

const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,
  
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      set({ todos: response.data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch todos", loading: false });
    }
  },

  // Add a new todo
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, newTodo],
    })),

  // Remove a todo
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // Toggle completion status
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoStore;
