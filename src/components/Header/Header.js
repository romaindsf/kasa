import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <img src="/assets/logo.svg" alt="logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  )
}
