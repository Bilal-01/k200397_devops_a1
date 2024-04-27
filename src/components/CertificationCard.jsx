import React from "react";
import "./components.css";

const CertificationCard = ({ title, description, org }) => (
  <div className="course-card">
    <h3 className="course-title">{title}</h3>
    <p className="course-description">{description}</p>
    <p className="course-grade">Organization: {org}</p>
  </div>
);

export default CertificationCard;
