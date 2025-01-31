import React from "react";

const List = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{ marginRight: "10px" }}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flexGrow: 1,
            }}
          >
            {todo.title}
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            style={{
              padding: "4px 8px",
              background: "red",
              color: "white",
              border: "none",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
