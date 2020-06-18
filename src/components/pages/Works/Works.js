import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Works.scss";

const Works = ({ projects, icons, category }) => {
  const categorizedList = projects.filter((project) => {
    return project.type === category;
  });

  const renderList = () => {
    const results = category === "all" ? projects : categorizedList;
    return results.map((project, idx) => {
      let iconList = [];

      project.technology.forEach((tech) => {
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
              <button className="btn btn-hover">DETAIL</button>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="portfolio" className="portfolio__works">
      <div className="project__wrapper">{renderList()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { projects: state.projects, icons: state.devIcons };
};

export default withRouter(connect(mapStateToProps)(Works));
