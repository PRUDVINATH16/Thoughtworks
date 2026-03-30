import { connect } from 'react-redux';

function Counter({ counterReducer, dispatch, todoInpRef }) {
  return (
    <div>
      <h2>Counter: {counterReducer.count}</h2>
      <button onClick={() => {
        dispatch({ type: 'INC' })
        todoInpRef.current.style.background = 'skyblue'
      }} >Increment</button>
      <button onClick={() => {
        dispatch({ type: 'DEC' })
      }} >Decrement</button>
    </div>
  )
}

export default connect(store => store)(Counter)