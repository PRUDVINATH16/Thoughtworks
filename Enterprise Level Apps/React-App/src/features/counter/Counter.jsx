import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './couterSlice';

function Counter() {

  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }} >Decrement</button>
    </div>
  )
}

export default Counter;