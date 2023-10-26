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
              style={{ backgroundColor: project.bgcolor, margin: "10px" }}
            >
              <h2>{project.title}</h2>
              <img
                src={project.description}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
              />
              <p>
                <a href={project.url}>View Project</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
