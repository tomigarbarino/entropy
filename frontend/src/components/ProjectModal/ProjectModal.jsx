"use client"
import React, { useState, useEffect } from "react";
import "./ProjectModal.scss";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorType, setCursorType] = useState(""); 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < project.media.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : project.media.length - 1
    );
  };

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const middle = left + width / 2;

    if (clientX < middle) {
      setCursorType("prev");
    } else {
      setCursorType("next");
    }
  };

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className={`modalContainer ${cursorType}`}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
      >
        <div className="textContainer">
          <div className="projectSection">
            <h3>How We Did It</h3>
            <p>{project.howWeDidIt}</p>
          </div>      
          <div className="projectSection">
            <h3>Roles</h3>
            {project.roles.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
          <div className="projectSection">
            <h3>Details</h3>
            <p>{project.details}</p>
          </div>
        </div>
        <div className="modalContent">
          <div
            className="mediaContainer"
            onClick={() => (cursorType === "next" ? nextSlide() : prevSlide())}
          >
            {project.media[currentIndex].type === "video" ? (
              <video
                src={project.media[currentIndex].src}
                controls
                autoPlay
                className="media"
              />
            ) : (
              <img
                src={project.media[currentIndex].src}
                alt={project.name}
                className="media"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
