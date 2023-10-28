import React from "react";
import projects from "../../ProjectsInfo/Projects.json";

const ProjectCard = () => {
  return (
    <section id="projects">
      <div className="container px-0">
        <div className="row">
          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="2500"
          >
            <div className="product">
              <div>
                <img src={Product1} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Bits & Bytes</h3>
              <a
                href="https://yasir2002.github.io/projects/bitsbytes/"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon shadow"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#bitsbytes"
                aria-controls="offcanvasRight"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="bitsbytes"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Bits & Bytes</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                The Bits&Bytes website project is a front-end template for an
                online coding academy that was assigned by my university
                teacher. The template is designed to showcase my front-end web
                development skills and create a user-friendly interface for an
                online coding academy.
              </p>
              <p>
                The website template has a modern and professional design that
                reflects the image of the online coding academy. The home page
                introduces the academy and provides a brief overview of the
                courses and programs offered. The website also has a
                registration page where new students can sign up and create an
                account.
              </p>
              <p>
                The website template has a responsive design that allows
                students to access the course content on different devices, such
                as desktop computers, laptops, tablets, and smartphones.
              </p>
              <p>
                Overall, the Bits&Bytes website template project is an excellent
                way to demonstrate my front-end web development skills and
                create a user-friendly interface for an online coding academy.
                The template can be customized and used as a starting point for
                a full-scale online coding academy website with a back-end
                functionality.
              </p>
              <a
                href="https://yasir2002.github.io/projects/bitsbytes/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <div className="product">
              <div>
                <img src={Product2} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Codecademy</h3>
              <a
                href="https://yasir2002.github.io/projects/codecademy/"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#codecademy"
                aria-controls="offcanvasLeft"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="codecademy"
            aria-labelledby="offcanvasLeftLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasLeftLabel">Codycademy</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                The Codecademy website project is a front-end template for an
                online coding academy that was assigned by my university
                teacher. The template is designed to showcase my front-end web
                development skills and create a user-friendly interface for an
                online coding academy.
              </p>
              <p>
                The website template has a modern and professional design that
                reflects the image of the online coding academy. The home page
                introduces the academy and provides a brief overview of the
                courses and programs offered. The website also has a
                registration page where new students can sign up and create an
                account.
              </p>
              <p>
                The website template has a responsive design that allows
                students to access the course content on different devices, such
                as desktop computers, laptops, tablets, and smartphones.
              </p>
              <p>
                Overall, the Codecademy website template project is an excellent
                way to demonstrate my front-end web development skills and
                create a user-friendly interface for an online coding academy.
                The template can be customized and used as a starting point for
                a full-scale online coding academy website with a back-end
                functionality.
              </p>
              <a
                href="https://yasir2002.github.io/projects/codecademy/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="row" data-aos="" data-aos-duration="2000">
          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="3000"
          >
            <div className="product">
              <div>
                <img src={Product3} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Conky Configuration</h3>
              <a
                href="https://github.com/yasir2002/Conky-Config-Files"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#conkyconfig"
                aria-controls="offcanvasRight"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="conkyconfig"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">
                Linux Desktop costomization files{" "}
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Conky is a free and open-source system monitor software for
                Linux and other Unix-like operating systems. It is designed to
                display system information and statistics on the desktop in
                real-time. Conky can display a wide range of information,
                including CPU usage, memory usage, disk usage, network activity,
                system temperature, date and time, and much more.
              </p>
              <p>
                Using conky and Lua I made own desktop preview. It displays many
                things linke date, time, sytem temprature, battery percentage,
                free memory, used memory, cpu temprature, network real time
                speed (upload & download), and much more.
              </p>
              <p>
                I've kept this code public so if anyone want to use this, he
                simply has to install Conky and Conky Manager (not necessary but
                recommended) and use these configuration files.
              </p>
              <a
                href="https://github.com/yasir2002/Conky-Config-Files"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  View Code
                </button>
              </a>
            </div>
          </div>

          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <div className="product">
              <div>
                <img src={Product4} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Tweeting Bot</h3>
              <a
                href="https://github.com/yasir2002/Auto-Tweeting-Twitter-Bot"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#twitterbot"
                aria-controls="offcanvasLeft"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="twitterbot"
            aria-labelledby="offcanvasLeftLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasLeftLabel">Twitter Bot</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                The Twitter Quote Bot is a Python-based project that uses the
                Tweepy library to automate the process of tweeting random quotes
                on a regular interval. The bot accesses a pre-selected database
                of quotes and selects one at random, then posts it on a
                designated Twitter account. The interval between tweets can be
                customized to meet the user's needs.
              </p>
              <p>
                The Twitter Quote Bot project showcases several key skills in
                software development and data management. Firstly, it
                demonstrates the ability to use a third-party library (Tweepy)
                to interface with an external service (Twitter's API) in order
                to automate a task. This requires knowledge of authentication
                and authorization mechanisms, as well as familiarity with the
                specific API endpoints used by Tweepy.
              </p>
              <p>
                Secondly, the project demonstrates proficiency in working with
                data, specifically in selecting and manipulating subsets of a
                larger dataset (the quotes database). This requires knowledge of
                data structures, file I/O, and possibly database management
                tools. Finally, the project showcases the ability to plan and
                implement a long-running task, which in this case requires
                scheduling tweets to be sent at specific intervals over a
                potentially indefinite period of time.
              </p>
              <p>
                Overall, the Twitter Quote Bot was a fun and engaging project
                that demonstrates several important skills in software
                development, data management, and automation.
              </p>
              <a
                href="https://github.com/yasir2002/Auto-Tweeting-Twitter-Bot"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  View code
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="row" data-aos="" data-aos-duration="2000">
          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="3000"
          >
            <div className="product">
              <div>
                <img src={Product5} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Gradient Generator</h3>
              <a
                href="https://yasir2002.github.io/gradient-generator/"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#gradientgenerator"
                aria-controls="offcanvasRight"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="gradientgenerator"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Random Gradient Generator</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Random Gradient Generator is a web application that generates
                random gradients with just one click! It's a simple web app that
                uses HTML, CSS, and JavaScript. With this tool, you can easily
                generate beautiful color schemes for your web designs or
                projects. Just click the button and copy the CSS property for
                your desired gradient. It's that simple!
              </p>
              <p>
                I had a lot of fun creating this project, and I hope you find it
                useful too. Feel free to share it with anyone who might be
                interested. Let me know if you have any feedback or suggestions
                for improvement.
              </p>
              <a
                href="https://yasir2002.github.io/gradient-generator/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          <div
            className="col-md-6 rounded-5 mt-4"
            data-aos="fade"
            data-aos-duration="3000"
          >
            <div className="product">
              <div>
                <img src={Product6} className="img-fluid rounded-5" alt="" />
              </div>
              <h3 className="productText">Box Shadow Generator</h3>
              <a
                href="https://yasir2002.github.io/box-shadow-generator/"
                target="_blank"
                rel="noreferrer"
                className="eyeIcon"
              >
                <i className="fa fa-eye"></i>
              </a>
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#boxshadow"
                aria-controls="offcanvasRight"
                className="linkIcon"
              >
                <i className="fa fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="boxshadow"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Box Shadow Generator</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Random Gradient Generator is a web application that generates
                random gradients with just one click! It's a simple web app that
                uses HTML, CSS, and JavaScript. With this tool, you can easily
                generate beautiful color schemes for your web designs or
                projects. Just click the button and copy the CSS property for
                your desired gradient. It's that simple!
              </p>
              <p>
                I had a lot of fun creating this project, and I hope you find it
                useful too. Feel free to share it with anyone who might be
                interested. Let me know if you have any feedback or suggestions
                for improvement.
              </p>
              <a
                href="https://yasir2002.github.io/box-shadow-generator/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btnContact rounded-pill px-4 py-2">
                  Visit Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
