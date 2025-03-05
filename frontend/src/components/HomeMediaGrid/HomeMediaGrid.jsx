'use client';
import Image from "next/image";
import React from "react";
import "./homeMediaGrid.scss";
import Button from "../Button/Button";

const HomeMediaGrid = ({ projects, onProjectClick }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="homeMediaGrid">
      {projects.map((project) => (
        <div
          key={project.mediaNumber}
          className="gridItem"
          onClick={() => onProjectClick(project)}
        >
          <Image
            src={project.mediaSrc}
            width={300}
            height={300}
            alt={project.name}
            unoptimized={true}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <span className="client">{project.name}</span>
        </div>
      ))}
      <Button text="BACK T0 T0P" onClick={scrollToTop} />
    </div>
  );
};

export default HomeMediaGrid;
