import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import udemy from "../../Public/Img/udemy.png";

const udemySrc1 = "https://www.udemy.com/course/the-web-developer-bootcamp/";
const udemySrc2 = "https://www.udemy.com/course/go-programming-language/";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 20 });
    AOS.refresh();
  }, []);
  return (
    <section id="skills">
      <h2 className="underline" data-aos="fade-right">
        <span className="font-code">02.</span> Skill Set
      </h2>
      <div data-aos="fade-right">
        <p className="skills-descp">
          Whenever I'm creating a project I use this workflow: after making web
          designs with Figma I create layouts using Semantic HTML. Then apply
          CSS in a mobile-first approach. <br /> Since I've started programming
          last year I wanted to understand the field. So I tried learning as
          many technologies and languages as I could. A lot of companies are
          using different stacks, so I want to be prepared for anything. Here's
          what I've learned so far:
        </p>
      </div>
      <div className="cards-grid-3">
        <article className="card" data-aos="fade-left">
          <div className="card-title">
            <h3>Front-end:</h3>
          </div>
          <p className="font-code">
            HTML & CSS / JavaScript / jQuery / React.js / Tailwindcss / Bootstrap v3 & v4
          </p>
        </article>
        <article className="card" data-aos="fade-right">
          <div className="card-title">
            <h3>Back-end:</h3>
          </div>
          <p className="font-code">Node.js / Express / MongoDB / Go</p>
        </article>
        <article className="card" data-aos="fade-left">
          <div className="card-title">
            <h3>Other:</h3>
          </div>
          <p className="font-code">
            Git & Github / React Native / Android Studio / Docker / Figma /
            Photoshop{" "}
          </p>
        </article>
      </div>
      <div className="cards-grid-2">
        <article className="card" data-aos="fade-right">
          <div className="card-title">
            <h3>Udemy course:</h3>
            <div className="text-right">
              <a href={udemy} rel="noopener noreferrer" target="_blank">
                <i className="far fa-file-alt"></i>
              </a>
            </div>
          </div>
          <p>
            I've' completed{" "}
            <a
              href={udemySrc1}
              className="color-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Web Developer Bootcamp
            </a>{" "}
            course on Udemy. In this course I've learned about JavaScript,
            jQuery, Node.js, Express, MongoDB, Git & Github.
          </p>
        </article>
        <article className="card" data-aos="fade-left">
          <div className="card-title">
            <h3>Udemy course:</h3>
            <div className="text-right">
              <p className="card-progress"></p>
            </div>
          </div>
          <p>
            At the moment I‘m learning Golang with the help of{" "}
            <a
              href={udemySrc2}
              className="color-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Web Development w/ Google’s Go course
            </a>{" "}
            With this course, I should be able to learn more about Golang and
            MySQL.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
