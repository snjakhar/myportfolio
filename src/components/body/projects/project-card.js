import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GIthub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <h4 className="feature">Features</h4>
        <p className="feature-detail">
          1.{project.features[0]}
          <br />
          2.{project.features[1]}
          <br />
          3.{project.features[2]}
        </p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img alt="" src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
