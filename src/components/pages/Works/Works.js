import React from "react";
import { connect } from "react-redux";
import { selectedProject } from "../../../store/action";
import { withRouter, Link } from "react-router-dom";

import "./Works.scss";

const Works = ({ projects, selectedProject, icons }) => {
  const onSelectedProject = (project) => {
    selectedProject(project);
  };

  const renderList = () => {
    return projects.map((project, idx) => {
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
            <button onClick={() => onSelectedProject(project)}>
              <Link to={project.id}>DETAIL</Link>
            </button>
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
