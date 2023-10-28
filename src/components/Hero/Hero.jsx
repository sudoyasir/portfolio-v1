import React from "react";
import MyPicture from "./utils/me.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div
            className="col-md-7 col-sm-12 topContact"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <div className=" rounded-5 position-relative p-5 bg_light">
              <img src={MyPicture} className="bgImg1" alt="" />
              <h1 style={{ fontWeight: "700" }}>
                Hello, I'm Yasir, a web <br />
                Developer with 2+ years of <br />
                experience
              </h1>
              <p className="my-4">
                As a frontend web developer, I am dedicated to creating visually
                stunning and highly functional websites that meet the needs of
                my clients and their users. With a keen eye for design and a
                passion for clean, efficient code, I strive to create websites
                that are both beautiful and intuitive, delivering seamless user
                experiences across all devices.
              </p>
              <div className="homeContact" style={{ marginTop: "5rem" }}>
                <a href="mailto:y451rmahar@gmail.com">
                  <button className="btn btnContact rounded-pill px-4 py-2">
                    Contact Me
                  </button>
                </a>
                <ul>
                  <li>
                    <a
                      href="https://instagram.com/yasirnawazzz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/YasirsThoughts"
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
          </div>

          <div
            className="col-md-5 col-sm-12 imgContainer "
            data-aos="fade"
            data-aos-duration="3000"
          >
            <img src={MyPicture} className="img-fluid rounded-5 " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
