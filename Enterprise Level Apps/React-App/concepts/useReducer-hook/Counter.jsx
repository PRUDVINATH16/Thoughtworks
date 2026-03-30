import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 }
    case 'DEC':
      return { count: state.count - 1 }
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => { dispatch({ type: 'DEC' }) }}>Decrement</button>
      <h2>Count: {state.count}</h2>
      <button onClick={() => { dispatch({ type: 'INC' }) }}>Increment</button>
    </div>
  )
}

export default Counter