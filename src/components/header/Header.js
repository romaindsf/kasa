import { Link } from 'react-router-dom'
import logo from 'logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  )
}
