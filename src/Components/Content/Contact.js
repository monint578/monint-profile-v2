import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <section id="contacts">
      <h2 className="underline" data-aos="fade-right">
        <span className="font-code">05.</span> Contacts
      </h2>
      <article className="contacts" data-aos="fade-left">
        <h1>Get in Touch</h1>
        <p>
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I hope to
          hear from you!
          <br/>
          <span className="font-code">monika.intaite@gmail.com</span>
        </p>
        <a
          className="btn-text font-code"
          href="mailto:monika.intaite@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
        <div className="btn-icons-bottom">
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
      </article>
    </section>
  );
};

export default Contact;
