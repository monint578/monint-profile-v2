import React, { useEffect } from "react";
import Accordion from "../Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

import {experience} from "../../database";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);
  return (
    <div id="experience">
      <h2 className="underline" data-aos="fade-right">
        <span className="font-code">04.</span> Work Experience
      </h2>
      <Accordion>
        {experience.map(({ name, where, when, descriptions}) => (
          <div className="card" data-aos="fade-right" key={name}>
            <div className="accor-head">
              <p className="bold">{name}</p>
              <p className="font-code">{where}</p>
              <div className="accor-grid">
                <p className="sm">{when}</p>
                <div className="fas fa-chevron-circle-down">
                  <span className="accor-btn"></span>
                </div>
              </div>
            </div>
            <div className="accor-body">
              <ul>
                {descriptions.map((description) => (
                  <li key={description}>
                    <i className="fas fa-caret-right"></i> {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default Experience;
