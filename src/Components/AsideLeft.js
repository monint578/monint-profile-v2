import React from "react";
import Theme from "./Theme";

import { ReactComponent as AboutSvg } from "../Public/Icons/user.svg";
import { ReactComponent as SkillsSvg } from "../Public/Icons/skills.svg";
import { ReactComponent as ProjectsSvg } from "../Public/Icons/projects.svg";
import { ReactComponent as ExperienceSvg } from "../Public/Icons/marker.svg";
import { ReactComponent as ContactsSvg } from "../Public/Icons/email.svg";

const navLinks = [
  { url: "/#about", comp: <AboutSvg />, id: 1 },
  { url: "/#skills", comp: <SkillsSvg />, id: 2 },
  { url: "/#projects", comp: <ProjectsSvg />, id: 3 },
  { url: "/#experience", comp: <ExperienceSvg />, id: 4 },
  { url: "/#contacts", comp: <ContactsSvg />, id: 5 },
];

function AsideLeft() {
  return (
    <div className="aside-left">
      <Theme />
      {/* <div className="aside-svgs">
        <div className="aside-svg">
          <ThemeSvg />
        </div>
      </div> */}
      <div className="aside-svgs">
        {navLinks.map(({ url, comp, id }) => (
          <a href={url} className="aside-svg" key={id}>
            {comp}
          </a>
        ))}
      </div>
      <div className="aside-bottom">
        <a
          href="https://www.linkedin.com/in/monint/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a
          href="https://github.com/monint578"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://codepen.io/monint578"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-codepen fa-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default AsideLeft;
