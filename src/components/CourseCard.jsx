import React from "react";
import "./components.css";

const CourseCard = ({ title, description, grade }) => (
  <div className="course-card">
    <h3 className="course-title">{title}</h3>
    <p className="course-description">{description}</p>
    <p className="course-grade">Grade: {grade}</p>
  </div>
);

export default CourseCard;
