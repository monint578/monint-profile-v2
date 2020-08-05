import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <header>
        <p className="font-code">Hi, my name is</p>
        <h1 className="header-title underline">Monika Intaitė.</h1>
        <h1 className="header-descr">I build things for the web</h1>
        <p className="header-about">
          I‘m a self-taught front-end web developer from Kaunas. Thanks for
          visiting my portfolio! <br /> Check out what I have been up to below.
        </p>
        <a
          className="btn-text font-code"
          href="mailto:monika.intaite@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get in Touch
        </a>
      </header>
    );
  }
}

export default Main;
