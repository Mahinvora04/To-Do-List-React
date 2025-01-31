import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoApp from "./TodoApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
