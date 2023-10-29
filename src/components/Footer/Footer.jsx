import React from "react";
import MyPicture from '../Hero/utils/me.jpg'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container mt-4 rounded-5 position-relative p-5 bg_light">
        <img src={MyPicture} className="bgImg1" alt="" />
        <h1 style={{ fontWeight: "700" }}>Want to work together?</h1>
        <p className="my-4">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <a
          href="mailto:y451rmahar@gmail.com"
          style={{ textDecoration: "none", color: "#1d1d1d" }}
        >
          y451rmahar@gmail.com
        </a>
        <div className="homeContact" style={{ marginTop: "5rem" }}>
          <a href="mailto:y451rmahar@gmail.com">
            <button className="btn btnContact rounded-pill px-4 py-2">
              Contact Me
            </button>
          </a>
          <ul>
            <li>
              <a
                href="https://instagram.com/stfuyasir"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stfuyasir"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yasirnawaz24/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yasir2002"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
