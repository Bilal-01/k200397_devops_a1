import React, { useState } from "react";
import { certificationData } from "../data/certificationData";
import "./pages.css";
import CertificationCard from "../components/CertificationCard";

const Certification = () => {
  const [certifications, setCertifications] = useState(certificationData);
  
  return (
    // Certfiication page
    <div className="projects-container">
      <h1 className="cert-heading">Certifications</h1>
      <div className="projects">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} title={cert.title} description={cert.description} org={cert.org} />
        ))}
      </div>
    </div>
  );
};

export default Certification;
