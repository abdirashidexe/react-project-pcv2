import { createRoot } from "react-dom/client";
import WhateverComponent from "./Header.jsx" // showing it can be named whatever
import MainContent from "./MainContent.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <WhateverComponent />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
  <Page />
)