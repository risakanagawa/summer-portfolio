import React from "react";
import { connect } from "react-redux";

const Work = ({ project }) => {
  const selectedProject = project[0];
  return (
      <div className='box-container' >
      <div className="box-border">
        <h1>{selectedProject.name}</h1>
        <img src={selectedProject.mockup} alt={selectedProject.name} />
        <ul>
        {selectedProject.technology.map(tech => <li>{tech}</li>)}
        </ul>
        {
            selectedProject.url ? <button>URL</button> : null
        }
      </div>
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
