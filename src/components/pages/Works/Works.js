import React from "react";
import { connect } from "react-redux";
import { selectedProject } from "../../../store/action";
import { withRouter, Link } from "react-router-dom";

import "./Works.scss";

const Works = ({ projects, selectedProject, icons, category }) => {
  console.log("works", category);
  const onSelectedProject = (project) => {
    selectedProject(project);
  };

  const categorizedList = projects.filter((project) => {
    return project.type === category;
  });
  console.log(categorizedList);

  const renderList = () => {
    const results = category === "all" ? projects : categorizedList;
    return results.map((project, idx) => {
      const techs = project.technology.map((tech) => {
        return tech.toLowerCase();
      });

      let iconList = [];

      techs.forEach((tech) => {
        icons.forEach((icon) => {
          if (tech === icon.name) {
            iconList.push(icon.svg);
          }
        });
        
      });

      return (
        <div key={idx} className="project__box">
          <div
            className="project__box--img"
            style={{
              background: `url(${project.img}) no-repeat center`,
              backgroundSize: "contain",
            }}
            alt={project.name}
          ></div>
          <div className="project__box--detail">
            <h3>{project.name}</h3>
            <ul>
              {iconList.map((icon, idx) => (
                <li key={idx}>{icon}</li>
              ))}
            </ul>
            <Link to={project.id}>
              <button
                className="btn btn-hover"
                onClick={() => onSelectedProject(project)}
              >
                DETAIL
              </button>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="portfolio__works">
      <div className="project__wrapper">{renderList()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { projects: state.projects.projects, icons: state.devIcons };
};

export default withRouter(connect(mapStateToProps, { selectedProject })(Works));
