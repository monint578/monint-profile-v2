import React, { Component } from "react";
import { ReactComponent as ThemeSvg } from "../Public/Icons/theme.svg";

import {themes} from "../database";

class Theme extends Component {
  constructor() {
    super();
    this.state = {
      style: "theme-popup",
      menuStatus: "open",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "theme-popup theme-active",
        });
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "theme-popup",
        });
        break;
      default:
      // do nothing
    }
  }
  changeTheme({ bg }, { heading }, { accent }, { text }, { primary }) {
    document.documentElement.style.setProperty("--color-bg", bg);
    document.documentElement.style.setProperty("--color-heading", heading);
    document.documentElement.style.setProperty("--color-accent", accent);
    document.documentElement.style.setProperty("--color-text", text);
    document.documentElement.style.setProperty("--color-primary", primary);
  }
  render() {
    return (
      <div className="theme">
        <div className={this.state.style}>
          <p className="bold theme-title">Select Theme</p>
          <div className="theme-container">
            {themes.map(({ name, bg, heading, accent, text, primary }) => (
              <div
                className="theme-cards"
                style={{
                  backgroundColor: bg,
                  borderColor: accent,
                  color: text,
                }}
                key={name}
                onClick={(e) =>
                  this.changeTheme(
                    { bg },
                    { heading },
                    { accent },
                    { text },
                    { primary }
                  )
                }
              >
                <p>{name}</p>
                <div className="color-dots">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: primary }}
                  ></span>
                  <span
                    className="color-dot"
                    style={{ backgroundColor: text }}
                  ></span>
                  <span
                    className="color-dot"
                    style={{ backgroundColor: bg }}
                  ></span>
                  <span
                    className="color-dot"
                    style={{ backgroundColor: heading }}
                  ></span>
                  <span
                    className="color-dot"
                    style={{ backgroundColor: accent }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-link-theme">
          <button className="btn-svgs" onClick={this.handleClick}>
            <ThemeSvg className="btn-svg" />
          </button>
        </div>
      </div>
    );
  }
}

export default Theme;
