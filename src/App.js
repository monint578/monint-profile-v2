import React from "react";
import "./App.css";
import "./reset.css";
import AsideLeft from "./Components/AsideLeft";
import AsideRight from "./Components/AsideRight";
import Content from "./Components/Content";
import SideNavbar from "./Components/SideNav";
import Theme from "./Components/Theme";

function App() {
  return (
    <main className="body">
      {/* AsideLeft and AsideRight only visable in large display */}
      <nav className="nav-buttons">
        <Theme />
        <SideNavbar />
      </nav>
      <AsideLeft />
      <Content />
      <AsideRight />
    </main>
  );
}

export default App;
