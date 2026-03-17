import React from 'react';

function Counter() {

  const [count, setCount] = React.useState(0);

  function handleCount() {
    setCount(count => count+1);
  }

  return (
    <>
      <div onClick={handleCount} className='box border-danger fw-bold'>{count}</div>
    </>
  )
}

export default Counter;
