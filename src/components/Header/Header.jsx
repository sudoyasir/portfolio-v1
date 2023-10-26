import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png"

const Header = () => {
  return (
    <section id="NavigationBar" data-aos="fade" data-aos-duration="4000">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="http://yasir2002.github.io/portfolio">
              <img src={Logo} alt="" /> <b> &nbsp;Yasir</b>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#NavigationBar"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
