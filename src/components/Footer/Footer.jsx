import React from "react";
import MyPicture from '../Hero/utils/me.jpg'

const Footer = () => {
  return (
    <section id="footer" className="container mb-2">
      <div className="container mt-4 rounded-5 position-relative p-5 bg_light">
        <img src={MyPicture} className="bgImg1" alt="" />
        <h1 style={{ fontWeight: "700" }}>Want to work together?</h1>
        <p className="my-4">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <a
          href="mailto:y451rmahar@gmail.com"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <i class="fa-solid fa-paper-plane"></i> y451rmahar@gmail.com
        </a>
        <div className="homeContact d-flex align-items-center" style={{ marginTop: "4rem" }}>
          <a href="mailto:y451rmahar@gmail.com">
            <button className="btn btnContact rounded-pill px-4 py-2 button-pulse">
              Contact Me
            </button>
          </a>
          <ul className="mb-0">
            <li>
              <a
                href="https://instagram.com/stfuyasir"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stfuyasir"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yasirnawaz24/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin icon"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yasir2002"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
