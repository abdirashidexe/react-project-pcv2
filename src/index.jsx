import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
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
    </>
  )
}

root.render(
  //<MainContent />
  <Page />
)