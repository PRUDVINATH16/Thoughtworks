import { useRef } from 'react'
import { useAddTodoItemMutation } from '../services/todoAPI'

function TodoInput() {

  const [addTodo] = useAddTodoItemMutation();
  const inputRef = useRef();

  return (
    <div className='input-section'>
      <input type="text" placeholder='Add a new task' ref={inputRef} />
      <button className='add-btn' onClick={() => {
        if(inputRef.current.value) {
          addTodo(inputRef.current.value);
          inputRef.current.value = '';
        }
      }}>
        Add
      </button>
    </div>
  )
}

export default TodoInput