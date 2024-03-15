import { Link, NavLink } from 'react-router-dom'
import logo from 'logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  )
}
