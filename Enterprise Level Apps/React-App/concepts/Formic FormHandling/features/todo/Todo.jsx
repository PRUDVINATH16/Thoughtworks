import { useEffect, useRef } from "react";
import {
  useAddTodoItemMutation,
  useLazyGetAllTodosQuery,
  useDeleteTodoItemMutation,
} from "../../services/todosAPI";

function Todo() {

  const todoInpRef = useRef();
  const [getLatestTodos, { isLoading, data }] = useLazyGetAllTodosQuery();
  const [addTodo] = useAddTodoItemMutation();
  const [deleteTodo] = useDeleteTodoItemMutation();

  useEffect( () => {
    getLatestTodos();
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <div className="input-section">
        <input type="text" ref={todoInpRef} />
        <button onClick={() => {
          if (todoInpRef.current.value) {
            addTodo({title: todoInpRef.current.value, status: 'incomplete', id: Date.now()});
            todoInpRef.current.value = '';
            getLatestTodos();
          }
        }}>Add</button>
      </div>
      <div className="todos">
        <ul>
          {
            !isLoading ?
            data?.map((todo) => <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={
                () => {
                  deleteTodo(todo.id);
                  getLatestTodos();
                }
              }>Delete</button>
            </li>)
            : 'Loading...'
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo