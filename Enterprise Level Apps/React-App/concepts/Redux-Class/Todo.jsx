import { connect } from 'react-redux';
import '../Performance-Best-Apps/styles.css'

function Todo({ todoReducer, dispatch, todoInpRef }) {

  return (
    <div>
      <h2>Todo App</h2>
      <div className="input-section">
        <input type="text" ref={todoInpRef} />
        <button onClick={() => {
          if (todoInpRef.current.value) {
            dispatch({ type: 'ADD', payload: todoInpRef.current.value });
            todoInpRef.current.value = '';
          }
        }}>Add</button>
      </div>
      <div className="todos">
        <ul>
          {todoReducer.todos.map((todo, index) => <li key={index}>
            <span>{todo}</span>
            <button onClick={
              () => {
                dispatch({ type: 'DELETETODO', payload: index })
              }
            }>Delete</button>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default connect(store => store)(Todo)