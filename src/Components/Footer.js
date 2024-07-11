import '../Styles/Footer.css'
import logo from '../assets/vertical-logo.png'

function Footer () {
  return (
    <footer className='footer'>
      <img src={ logo } alt="Little Lemon logo"/>
      <div className='footer-element'>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Reservations</a></li>
          <li><a href="/">Order Online</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>

      <div className='footer-element'>
        <h4>Contact</h4>
        <ul>
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone Number</a></li>
          <li><a href="/">email</a></li>
        </ul>
      </div>

      <div className='footer-element'>
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">facebook</a></li>
          <li><a href="/">Twitter</a></li></ul>
      </div>

    </footer>
  )
}

export default Footer