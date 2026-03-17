import { useRef } from 'react'
import { UseTodoList } from './UseTodoList'
import '../styles.css';

function TodoList() {

  const [todos, addTodo, deleteTodo] = UseTodoList();
  const todoInput = useRef();

  return (
    <>
      <div className="input-section">
        <input type="text" ref={todoInput} />
        <button onClick={
          () => {
            todoInput.current.value ? 
            (addTodo(todoInput.current.value), todoInput.current.value='') : 
            ''
          }
        }>Add</button>
      </div>
      <ul>
        {
        todos.map( (todo) => { return <li>
          <span>{todo.task}</span>
          <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
          </li>})}
      </ul>
    </>
  )
}

export default TodoList