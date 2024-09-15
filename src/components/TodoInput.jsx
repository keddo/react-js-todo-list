import { useState } from "react";

export default function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
  const [newTodo, setNewTodos] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}>
        Add
      </button>
    </header>
  );
}
