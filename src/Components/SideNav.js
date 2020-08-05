import React, { Component } from "react";
import Resume from "../Public/monika_intaite_eng.pdf";

const navLinks = [
  { url: "/#about", name: "About Me", id: 1 },
  { url: "/#skills", name: "Skill Set", id: 2 },
  { url: "/#projects", name: "Projects", id: 3 },
  { url: "/#experience", name: "Experience", id: 4 },
  { url: "/#contacts", name: "Contacts", id: 5 },
];

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      style: "nav-side",
      menuStatus: "open",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "nav-side nav-active",
          animation: "burger-open",
        });
        document.documentElement.style.setProperty("--overflow", "hidden");
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "nav-side",
          animation: "burger-close",
        });
        document.documentElement.style.setProperty("--overflow", "auto");
        break;
      default:
      // do nothing
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-link-side">
          <button onClick={this.handleClick} className={this.state.animation}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        </div>

        <div className={this.state.style}>
          <ul>
            {navLinks.map(({ url, name, id }) => (
              <li key={id}>
                <a
                  href={url}
                  className="underline-nav"
                  onClick={this.handleClick}
                >
                  <span className="font-code">0{id} </span>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn-text"
            href={Resume}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </nav>
    );
  }
}

export default SideNav;
