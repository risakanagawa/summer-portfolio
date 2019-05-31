import React from "react";
import { connect } from "react-redux";
import Backbar from "../layout/Backbar";

const Work = ({ project }) => {
  const selectedProject = project[0];
  return (
    <div className="work-container">

      <div className="work-contents">

        <div className="work-img">
          <img src={selectedProject.img} alt={selectedProject.name} />
        </div>

        <div className="work-name">
          <h1>{selectedProject.name}</h1>
        </div>

      </div>


        <div className="work-description">
          <p>{selectedProject.description}</p>
        </div>

        <div className="work-contents reverse">

          <div className="work-detail">
            <ul>
              <li>Technologies</li>
              {selectedProject.technology.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
            {selectedProject.url ? (
              <button>
                {" "}
                <a href={selectedProject.url} target="_blank">
                  Github
                </a>
              </button>
            ) : null}
          </div>

          <div className="work-mockup">
            <img src={selectedProject.mockup} alt={selectedProject.name} />
          </div>

        </div>

      <Backbar />
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    project: state.selectedProject
  };
}

export default connect(mapStateToProps)(Work);
