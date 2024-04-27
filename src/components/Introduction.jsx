import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="introduction">
      <h1 className="name">Mohammad Bilal Aziz</h1>
      <p className="objective">
        A passionate full-stack developer with a focus on creating intuitive and
        scalable web applications.
      </p>
      <Technologies />
      <SocialMedia />
    </section>
  );
};

const Technologies = () => {
  return (
    <>
        <h1>
            Technologies
        </h1>
        <div className="technologies">
        <FaHtml5 />
        <FaCss3 />
        <FaReact />
        <FaNodeJs />
        <FaJava />
        </div>
    </>
  );
};

const SocialMedia = () => {
  return (
    <>
    <div className="lato-regular social-heading">
      Connect with Me
    </div>
      <div className="social-media">
        <a href="mailto:mbilalaziz.01@gmail.com" className="social-media-item red">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Bilal-01"
          className="social-media-item black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/m-bilal-aziz-454a861b3/"
          className="social-media-item blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@mbilalaziz.01"
          className="social-media-item black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009049013541"
          className="social-media-item blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/bilal_aziz01/"
          className="social-media-item red"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default Introduction;
