export default function Header() {
  return(
    <header className="myHeader">
        <img src="src/assets/react.svg" alt="React logo" className="myLogo"/>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
    </header>
  )
}