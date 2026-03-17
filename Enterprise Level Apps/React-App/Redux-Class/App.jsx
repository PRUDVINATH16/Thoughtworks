import { useRef } from "react";
import Counter from "./Counter"
import Todo from "./Todo"

function App() {

  const todoInpRef = useRef();

  return (
    <>
      <Counter todoInpRef = {todoInpRef} />
      <Todo todoInpRef = {todoInpRef} />
    </>
  )
}

export default App