import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import { projectsData } from "../data/projectsData";
import "./pages.css";

// const projectsData = [
//   {
//     title: "Project 1",
//     description: "This is a short description of Project 1.",
//     collaborators: ["Collaborator 1", "Collaborator 2"],
//     githubUrl: "https://github.com/username/project1",
//     tags: ["C#", "MySQL", "React"],
//   },
//   {
//     title: "Project 2",
//     description: "This is a short description of Project 2.",
//     collaborators: ["Collaborator 3"],
//     githubUrl: "https://github.com/username/project2",
//     tags: ["JavaScript", "Node.js", "PostgreSQL", "C#"],
//   },
// ];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleSearch = (searchTerm) => {
    const filteredProjects = projectsData.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProjects(filteredProjects);
  };

  return (
    <div className="projects-container">
      <div className="searchbar-holder">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
