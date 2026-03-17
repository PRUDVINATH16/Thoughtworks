import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Products from './components/Products';
import Recipes from './components/Recipes';
import Home from './components/Home';



function App() {
  return (
    <div className='box border-success fw-bolder'>
      <div>Hi, Welcome to the Enterprise Level React Applications!!</div>
      <Header />
      <div className="container">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/products' element={<Products />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
