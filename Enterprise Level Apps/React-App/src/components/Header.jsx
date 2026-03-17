import {Link, Outlet} from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="navigation">
        <Link to="/">home</Link>
        <Link to="/counter">counter</Link>
        <Link to="/products">products</Link>
        <Link to="/recipes">recipes</Link>
        <Link to="/todo">todo</Link>
      </div>
     </div>
  )
}

export default Header