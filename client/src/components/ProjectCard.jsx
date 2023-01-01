import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6 className="card-title">{project.name}</h6>
            <a
              href={`/projects/${project.id}`}
              className="btn btn-light project-view-btn"
            >
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
