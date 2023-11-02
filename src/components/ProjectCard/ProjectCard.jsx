import React from "react";
import "../../index.scss";
import "./ProjectCard.scss";

import projects from "./Projects.json";

import project1 from "./projectsImages/project1.png";
import project2 from "./projectsImages/project2.png";
import project3 from "./projectsImages/project3.png";

const images = [project1, project2, project3];

const getIcon = (language) => {
  switch (language) {
    case "React":
      return { className: "fab fa-react", color: "#61dafb" };
    case "JSX":
      return { className: "fab fa-react", color: "#61dafb" };
    case "CSS":
      return { className: "fab fa-css3-alt", color: "#1572B6" };
    case "HTML":
      return { className: "fab fa-html5", color: "#E34F26" };
    case "JavaScript":
      return { className: "fab fa-js", color: "#F7DF1E" };
    case "Bootstrap":
      return { className: "fab fa-bootstrap", color: "#a500ff" };
    default:
      return { className: "fa-solid fa-question", color: "red" };
  }
};

const ProjectCard = () => {
  return (
    <div className="container my-5" id="projects">
      <h2 className="fw-bold text-white">Projects</h2>
      {projects.map((project, index) => (
        <div
          className="card p-4 rounded-5 mb-3 my-4 border-0 shadow projectsCard"
          style={{ backgroundColor: "rgb(22, 22, 22)" }}
          key={index}
        >
          <div className="row">
            <div className="col-md-7 d-flex flex-column justify-content-around custom-content">
              <h5 className="" style={{ color: "#00ff7779" }}>
              <i class="fa-solid fa-tag"></i> {project.type}
              </h5>
              <h2 className="fw-bold w-75 text-white">{project.name}</h2>
              <div className="d-flex justify-content-around w-50"
                style={{color: "white"}}
              >
                {project.languages.map((language, langIndex) => {
                  const { className, color } = getIcon(language);
                  return (
                    <span key={langIndex} className="d-flex align-items-center">
                      <i
                        className={`${className} pe-1`}
                        style={{ color: color, fontSize: "20px" }}
                      >
                        {" "}
                      </i>
                      {language}
                    </span>
                  );
                })}
              </div>

              <div className="d-flex i-center mt-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-white fw-bold"
                >
                  Visit Site <i className="fa fa-link"></i>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn rounded-circle text-white fw-bold ms-2"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src={images[index]} className="img-fluid rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
