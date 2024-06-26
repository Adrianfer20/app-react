import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='bg-blue-900 text-white p-2'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar