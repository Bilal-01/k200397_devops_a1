import React from "react";
import { FaGithub } from "react-icons/fa";
import "./components.css";

const ProjectCard = ({ project }) => {
  const { title, description, collaborators, githubUrl, tags } = project;

  return (
    <div className="project-card">
      <div>
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
      <div>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => (
            <p key={index}>{collaborator}</p>
          ))}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub />View Project
        </a>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
