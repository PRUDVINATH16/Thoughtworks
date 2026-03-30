import { useState } from "react";


export function UseTodoList() {
  const [todos, setTodos] = useState([]);
  const [NextId, setNextId] = useState(1);

  function addTodo(todo) {
    setTodos([...todos, { task: todo, id: NextId }]);
    setNextId(NextId + 1);
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return [todos, addTodo, deleteTodo];
}