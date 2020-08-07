import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {projects} from "../../database";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <section id="projects">
      <h2 className="underline" data-aos="fade-right">
        <span className="font-code">03.</span> Things I've Built
      </h2>
      {projects.map(
        ({
          name,
          gitlink,
          link,
          codelink,
          gitIconStyle,
          linkIconStyle,
          codeIconStyle,
          contentStyle,
          prog,
          img,
          descr,
        }) => (
          <article data-aos="fade-right" className="cards-grid-projec" key={name}>
            <div className="card-projects">
              <div className="card-title">
                <h3>{name}</h3>
                <div className="card-links">
                  <p className={contentStyle}></p>
                  <a href={gitlink} rel="noopener noreferrer" target="_blank">
                    <i className={gitIconStyle}></i>
                  </a>
                  <a href={link} rel="noopener noreferrer" target="_blank">
                    <i className={linkIconStyle}></i>
                  </a>
                  <a href={codelink} rel="noopener noreferrer" target="_blank">
                    <i className={codeIconStyle}></i>
                  </a>
                </div>
              </div>
              <p className="card-descr">{descr}</p>
              <p className="font-code">{prog}</p>
            </div>
              <div className="card-img">
                <img src={img} alt={name} />
              </div>
          </article>
        )
      )}
    </section>
  );
};

export default Projects;
