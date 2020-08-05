import React, { useEffect } from "react";
import picture from "../../Public/Img/picture.png";
import AOS from "aos";
import "aos/dist/aos.css";

import {aboutMe} from "../../database";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <section id="about">
      <h2 className="underline" data-aos="fade-right">
        <span className="font-code">01.</span> About me
      </h2>
      <article data-aos="fade-left">
        <div className="about-grid-2">
          <p>
            I‘m a self-taught web developer currently learning front-end and
            back-end programming. I'm mainly focused on the front-end, but I
            understand that true apps require some back-end knowledge as well. I
            have started my career in the textile manufacturing sector but soon
            I realized that I wanted to learn and grow more. Such opportunities
            in this sector were limited. So I shifted my focus to programming
            for the web. I‘ve started learning the basics of web development on
            various course platforms. At this moment I'm creating personal
            projects to improve my skills.
          </p>
          <div className="pic">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="about-grid-3">
          {aboutMe.map(({ name, description }) => (
            <div className="about-card" key={name}>
              <p className="font-code">{name}</p>
              <p className="sml">{description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default About;
