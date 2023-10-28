import React from "react";
import skillsData from "./skillsData.json";

const Skills = () => {
  return (
    <div className="container">
      <h2>Skills</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card rounded-5"
              style={{ backgroundColor: skill.backgroundColor }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h2 style={{ color: `${skill.color}` }}>{skill.name}</h2>
                  </div>
                  <div className="card-description text-secondary">
                    {skill.description}
                  </div>
                </div>
                <i
                  className={`${skill.icon}`}
                  style={{ color: `${skill.color}`, fontSize: "5rem" }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
