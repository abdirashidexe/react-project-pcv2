import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/*function MainContent() {
  return (
    <main>
      <img src="src/assets/react.svg" width="40px" alt="React logo"/>
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}*/

function Page() {
  return (
    <div>
        <header>
          <img src="src/assets/react.svg" alt="React logo"/>
        </header>
        <main>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
            <li>it's cool</li>
            <li>higher pay</li>
            <li>xD</li>
          </ol>
        </main>
        <footer>
          <small>© 2025 Ahmed development. All rights reserved.</small>
        </footer>
    </div>
  )
}

root.render(
  //<MainContent />
  <Page />
)