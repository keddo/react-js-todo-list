import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          index={todoIndex}
          handleEditTodo={handleEditTodo}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
