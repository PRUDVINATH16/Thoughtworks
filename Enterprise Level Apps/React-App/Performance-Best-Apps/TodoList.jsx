import { useState, useCallback } from 'react'
import Todo from './Todo';
import './styles.css';

function TodoList() {

  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState('');
  const [NextId, setNextId] = useState(1);
  const [refs, setRefs] = useState([]);

  const handleInpChange = useCallback((ev) => {
    setInp(ev.target.value);
  }, []);

  const handleAddClick = useCallback(() => {
    if (inp.trim() != '') {
      setTodos((prevTodos) => [...prevTodos, { task: inp, id: NextId }]);
      setNextId((prevId) => prevId + 1);
    }
    setInp('');
  }, [inp, NextId]);

  const handleDeleteClick = useCallback((id) => {
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const getRef = useCallback((ref) => {
    setRefs((prevRefs) => [...prevRefs, ref.current]);
  }, []);

  function getRefu() {
    console.log(refs)
    console.log(refs[0])
  }

  return (
    <div className="todo-app">
      <div className="input-section">
        <input type="text" onChange={handleInpChange} value={inp} />
        <button onClick={handleAddClick}>Add</button>
        <input type="text" onClick={getRefu}/>
      </div>
      <ul>
        {
          todos.map(todo => (<Todo todo={todo} deletee={handleDeleteClick} key={todo.id} sendRef={getRef} />))
        }
      </ul>
    </div>
  )
}

export default TodoList;