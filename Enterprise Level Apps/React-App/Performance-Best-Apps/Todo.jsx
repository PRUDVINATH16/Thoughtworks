import { useEffect, memo, useRef } from "react";

function Todo({ todo, deletee, sendRef }) {

  useEffect(() => {
    // console.log(todo.id, 'mounted');
    // return function () {
    //   console.log(todo.id, 'unmounted');
    // }

    function handleSendRef() {
      sendRef(spanRef);
    }
    handleSendRef();
  }, [sendRef]);

  const spanRef = useRef();



  return (
    <li>
      <span ref={spanRef}>{todo.task}</span>
      <button onClick={() => { deletee(todo.id) }}>Delete</button>
    </li>
  )
}

export default memo(Todo);