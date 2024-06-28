import '../Styles/Nav.css'

function Nav () {
  return (
    <nav className="nav-bar">
      <ul className='nav-bar-ul'>
        <li><a href="/" className='nav-bar-links'>Home</a></li>
        <li><a href="/" className='nav-bar-links'>About</a></li>
        <li><a href="/" className='nav-bar-links'>Menu</a></li>
        <li><a href="/" className='nav-bar-links'>Reservations</a></li>
        <li><a href="/" className='nav-bar-links'>Order Online</a></li>
        <li><a href="/" className='nav-bar-links'>Login</a></li>
      </ul>
    </nav>

  )
}

export default Nav