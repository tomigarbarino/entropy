'use client';
import Image from "next/image";
import React from "react";
import "./homeMediaGrid.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";

const HomeMediaGrid = ({ projects, onProjectClick }) => {
  return (
    <div className="homeMediaGrid">
      {projects.map((project) => (
        <div key={project.mediaNumber} className="gridItem" onClick={() => onProjectClick(project)}>
          {project.mediaSrc.includes("vimeo.com") ? (
            <VimeoEmbed videoUrl={project.mediaSrc} />
          ) : (
            <Image 
              src={project.mediaSrc} 
              width={300} 
              height={300} 
              alt={project.name} 
              unoptimized={true} 
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          )}
          <span className="client">{project.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeMediaGrid;
