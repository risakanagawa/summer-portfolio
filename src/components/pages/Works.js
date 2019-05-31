import React from "react";
import { connect } from "react-redux";
import { selectedProject } from "../../store/action";
import { withRouter, Link } from "react-router-dom";

class Works extends React.Component {
  onSelectedProject = project => {
    this.props.selectedProject(project);
  };

  renderList() {
    return this.props.projects.map((project, idx) => {
      return (
        <div key={idx} className="project-box">
          <div className="project-img">
            <img src={project.img} alt={project.name} />
          </div>
          <div className="project-detail">
          <h3>{project.name}</h3>
            <button onClick={() => this.onSelectedProject(project)}>
              <Link to={project.id}>DETAIL</Link>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <div className="project-wrapper">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { projects: state.projects.projects };
};

export default withRouter(
  connect(
    mapStateToProps,
    { selectedProject }
  )(Works)
);
