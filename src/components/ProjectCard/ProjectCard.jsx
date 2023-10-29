import React from "react";
import projects from "./Projects.json";
import "../../index.css";
import project1 from "./projectsImages/project1.png";

const images = [project1]; // You can add more images here if needed

const ProjectCard = () => {
  return (
    <div className="projContainer">
      <div className="grid">
        {projects.map((project, index) => (
          <figure className="projCard" key={index}>
            <img
              className="object-fit-cover"
              src={images[index]}
              alt={`img${index}`}
            />
            <figcaption>
              <h2>{project.name}</h2>
              <p className="icon-links">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-3"
                >
                  <i className="fa fa-eye"></i>
                </a>
              </p>
              <p className="description">{project.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
