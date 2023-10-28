import React from "react";
import projects from "../../ProjectsInfo/Projects.json";

const ProjectCard = () => {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="card rounded-5"
              style={{ backgroundColor: "#212121", margin: "10px" }}
            >
              <img
                src={project.description}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="fw-bold text-white mb-3">{project.title}</h2>
                <p>
                  <a
                    href={project.url}
                    className="btn btn-light shadow mt-4 rounded-pill"
                  >
                    View Project
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
