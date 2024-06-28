import Nav from "./Nav"
import logo from '../assets/horizontal-logo.png'
import '../Styles/Header.css'

export default function Header () {
  return (
    <header className="header">
      <img src={ logo } alt="Little Lemon logo"/>
      <Nav></Nav>
    </header>
  )
}

