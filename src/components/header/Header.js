import logo from "../../assets/logo.png"

function Header () {
    return (
        <header>
            <img src={logo} alt="logo Kasa"/>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A Propos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header