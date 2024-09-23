import { Link } from 'react-router-dom'
import '../Styles/Nav.css'


function Nav () {
  return (
    <nav className="nav-bar">
      <ul className='nav-bar-ul'>
        <li><Link to="/" className='nav-bar-links'>Home</Link></li>
        <li><a href="/" className='nav-bar-links'>About</a></li>
        <li><a href="/" className='nav-bar-links'>Menu</a></li>
        <li><Link to="/bookings" className='nav-bar-links'>Reservations</Link></li>
        <li><a href="/" className='nav-bar-links'>Order Online</a></li>
        <li><a href="/" className='nav-bar-links'>Login</a></li>
      </ul>
    </nav>

  )
}

export default Nav