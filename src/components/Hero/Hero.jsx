import React from "react";
import MyPicture from "./utils/me.jpg";
import bgImg from "./utils/green.jpg";
import "../../index.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-7 col-sm-12 topContact ">
            <div className=" rounded-5 position-relative p-5 bg_light d-flex h-100 justify-content-center flex-column">
              <img src={bgImg} className="bgImg1" alt="" />
              <h1 style={{ fontWeight: "700", fontSize: "35px"}} className="pe-4">
                Hello, I'm Yasir, a MERN
                Developer with a passion for
                clean and efficient code
              </h1>
              <p className="my-4">
                As a MERN developer, I am dedicated to creating highly
                functional full-stack applications. With a passion for clean,
                efficient code and a focus on delivering seamless user
                experiences, I strive to develop applications that are both
                robust and user-friendly.
              </p>

              <div className="homeContact d-flex align-items-center" style={{ marginTop: "3rem" }}>
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
          </div>

          <div
            className="col-md-5 col-sm-12 imgContainer d-flex justify-content-center"
            data-aos="fade"
            data-aos-duration="3000"
          >
            <img src={MyPicture} className=" rounded-5" alt="Hero" style={{width: "90%"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
