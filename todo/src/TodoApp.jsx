import React, { useEffect, useState } from "react";
import useTodoStore from "./Store/store";
import List from "./Components/List";

const TodoApp = () => {
  const { todos, fetchTodos, addTodo, removeTodo, toggleTodo, loading, error } =
    useTodoStore();
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo({ id: Date.now(), title: newTodo, completed: false });
      setNewTodo("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>To-Do List</h1>
      {loading && <p>Loading todos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: "8px", width: "300px" }}
        />
        <button
          onClick={handleAddTodo}
          style={{ padding: "8px 12px", marginLeft: "10px" }}
        >
          Add
        </button>
      </div>
      <List todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
