import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Backbar from "../layout/Backbar";
import LangBar from "../layout/LangBar";

const Work = ({ projects, icons }) => {
  const [t, i18n] = useTranslation();
  const { name } = useParams();
  const selectedProject = projects.find((project) => project.id === name);
  const iconList = [];
  selectedProject.technology.forEach((tech) => {
    icons.forEach((icon) => {
      if (tech === icon.name) {
        iconList.push(icon.svg);
      }
    });
  });

  return (
    <div className="work-container">
      {selectedProject.mockup ? (
        <div className="work-mockup">
          <img src={selectedProject.mockup} alt={selectedProject.name} />
        </div>
      ) : (
        <div className="work-mockup">
          <img src={selectedProject.img} alt={selectedProject.name} />
        </div>
      )}

      <div className="work-contents reverse">
        <div className="work-detail">
          <h1>{selectedProject.name}</h1>

          <div className="work-description">
            <p>{　i18n.language === "ja" ?　selectedProject.description.ja : selectedProject.description.en}</p>
          </div>
          <ul>
            {iconList.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
          <div>
          {selectedProject.url && (
            <a href={selectedProject.url} target="_blank">
              <button className="btn btn-hover"> Github </button>
            </a>
          )}
          {selectedProject.realUrl && (
            <a href={selectedProject.realUrl} target="_blank">
              <button className="btn btn-hover"> TRY </button>
            </a>
          )}
          </div>

        </div>
      </div>
      <LangBar />
      <Backbar />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    icons: state.devIcons,
  };
}

export default connect(mapStateToProps)(Work);
