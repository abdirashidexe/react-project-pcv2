import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
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

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>it's cool</li>
        <li>higher pay</li>
        <li>xD</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Ahmed development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)