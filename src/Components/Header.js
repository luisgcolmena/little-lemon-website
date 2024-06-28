import Nav from "./Nav"
import logo from '../assets/horizontal-logo.png'
/* import '..Styles/Header.css' */

export default function Header () {
  return (
    <>
      <img src={ logo } alt="Little Lemon logo"/>
      <Nav></Nav>
    </>
  )
}

