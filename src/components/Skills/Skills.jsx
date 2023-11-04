import React, { useState } from "react";
import skillsData from "./skillsData.json";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const filterSkills = (category) => {
    setSelectedCategory(category);
  };

  const skillTypes = [...new Set(skillsData.map((skill) => skill.category))];

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-white">Skills</h2>
      <div className="d-flex justify-content-center my-4">
        <div className="d-flex flex-wrap categoryBtn">
          {skillTypes.map((type, index) => (
            <button
              key={index}
              className={`btn mx-2 ${
                selectedCategory === type ? "btn-success" : "btn-secondary"
              }`}
              onClick={() => filterSkills(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="row my-4">
        {skillsData
          .filter((skill) => skill.category === selectedCategory)
          .map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card rounded-5 mb-4 border-0 p-3 shadow skillsCard"
                style={{ backgroundColor: "rgb(22 22 22)", cursor: "pointer" }}
                onClick={() => filterSkills(skill.category)}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <div className="card-title">
                      <h2 style={{ color: `${skill.color}` }}>{skill.name}</h2>
                    </div>
                    <div
                      className="card-description text-secondary"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {skill.description}
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex bg-transparent border-top-0 justify-content-end">
                  <i
                    className={`${skill.icon}`}
                    style={{ color: `${skill.color}`, fontSize: "3rem" }}
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
