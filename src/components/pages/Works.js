import React from "react";
import { connect } from "react-redux";
import { selectedProject } from "../../store/action";
import { withRouter, Link } from "react-router-dom";

import "./Works.scss";

const Works = ({ projects, selectedProject }) => {
  console.log(selectedProject);

  const onSelectedProject = (project) => {
    selectedProject(project);
  };

  const renderList = () => {
    return projects.map((project, idx) => {
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
            <button onClick={() => onSelectedProject(project)}>
              <Link to={project.id}>DETAIL</Link>
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div id="portfolio" className="portfolio">
        <div className="portfolio__stickey">
          <h1>Portfolio</h1>
        </div>
        <div className="project-wrapper">{renderList()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { projects: state.projects.projects };
};

export default withRouter(connect(mapStateToProps, { selectedProject })(Works));
