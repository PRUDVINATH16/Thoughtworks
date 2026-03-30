import { useReducer, useState, useRef } from "react";
import '../Performance-Best-Apps/styles.css'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { todos: [...state.todos, action.newTodo] };
    case 'DEL':
      return { todos: state.todos.filter(todo => todo.id !== action.todoId) };
    default:
      return;
  }
}

function Todo() {

  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [nextId, setNextId] = useState(1);
  const todoInpRef = useRef();

  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <div className="input-section">
        <input type="text" ref={todoInpRef} />
        <button onClick={() => {
          dispatch({ type: 'ADD', newTodo: { task: todoInpRef.current.value, id: nextId } });
          setNextId(nextId + 1);
          todoInpRef.current.value = '';
        }}>Add</button>
      </div>
      <div className="todos">
        <ul>
          {
            state.todos.map(todo => <li key={todo.id}>
              <span>{todo.task}</span>
              <button onClick={() => { dispatch({ type: 'DEL', todoId: todo.id }) }}>Delete</button>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo