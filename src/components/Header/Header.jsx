import React from "react";
import Logo from "../../images/logo.png";
import CV from "../../cv.pdf";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const handleDownload = () => {
    toast.success("CV is Downloaded! 🚀", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section id="NavigationBar" data-aos="fade" data-aos-duration="4000">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="http://yasir2002.github.io/portfolio"
            >
              <img src={Logo} alt="" />{" "}
              <b className="text-white"> &nbsp;Yasir </b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#NavigationBar"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href={CV}
                    download="Yasir's CV"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link rounded-pill px-3 CVBtn"
                    onClick={handleDownload}
                  >
                    <i className="fa fa-download"></i> Download CV
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
