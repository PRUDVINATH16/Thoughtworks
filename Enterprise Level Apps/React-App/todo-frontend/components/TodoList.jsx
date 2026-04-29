import React, { useEffect } from 'react'
import { useLazyGetAllTodosQuery } from '../services/todoAPI';

function TodoList() {

  const [getLatestTodos, { isLoading, data }] = useLazyGetAllTodosQuery();

  useEffect(() => {
    getLatestTodos();
  }, []);

  return (
    <div className='todos'>
      <ul>
        {!isLoading ?
          data?.map((todo) => <li key={todo.id}>{todo.task}<button>Delete</button></li>)
          : 'Loading...'
        }
      </ul>
    </div>
  )
}

export default TodoList