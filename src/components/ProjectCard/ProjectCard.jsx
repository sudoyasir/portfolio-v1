import React from "react";
import projects from "../../ProjectsInfo/Projects.json";

const ProjectCard = () => {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="card rounded-5 p-5"
              style={{ backgroundColor: project.bgcolor, margin: "10px" }}
            >
              <h2 className="fw-bold text-white mb-3">{project.title}</h2>
              <img
                src={project.description}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
                className="shadow"
              />
              <p>
                <a href={project.url} className="btn btn-light shadow mt-4 rounded-pill">View Project</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
