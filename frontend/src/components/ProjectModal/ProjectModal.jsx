"use client";
import React, { useState, useEffect } from "react";
import "./ProjectModal.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";

const ProjectModal = ({ isOpen, onClose, project, showTexts = true }) => {
  if (!isOpen || !project) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorType, setCursorType] = useState("");
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        triggerNext();
      } else if (e.key === "ArrowLeft") {
        triggerPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, animClass]);

  const triggerNext = () => {
    if (animClass) return;
    setAnimClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < project.media.length ? prevIndex + 1 : 0
      );
      setAnimClass("fade-in");
      setTimeout(() => {
        setAnimClass("");
      }, 500);
    }, 500);
  };

  const triggerPrev = () => {
    if (animClass) return;
    setAnimClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : project.media.length - 1
      );
      setAnimClass("fade-in");
      setTimeout(() => {
        setAnimClass("");
      }, 500);
    }, 500);
  };

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const middle = left + width / 2;
    setCursorType(clientX < middle ? "prev" : "next");
  };

  const renderHowWeDidIt = () => {
    const paragraphs = Array.isArray(project.howWeDidIt)
      ? project.howWeDidIt
      : [project.howWeDidIt];
    return paragraphs.map((para, index) => (
      <p key={index} className="howWeDidItParagraph">
        {para}
      </p>
    ));
  };

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className={`modalContainer ${cursorType}`}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
      >
        {showTexts && (
          <div className="textContainer">
            {project.howWeDidIt && (
              <div className="projectSection">
                <h3>How We Did It</h3>
                {renderHowWeDidIt()}
              </div>
            )}
            {project.roles && project.roles.length > 0 && (
              <div className="projectSection">
                <h3>Roles</h3>
                {project.roles.map((role, index) => (
                  <p key={index}>{role}</p>
                ))}
              </div>
            )}
            {project.details && (
              <div className="projectSection">
                <h3>Details</h3>
                <p>{project.details}</p>
              </div>
            )}
          </div>
        )}
        <div className="modalContent">
          <div
            className="mediaContainer"
            onClick={() =>
              cursorType === "next" ? triggerNext() : triggerPrev()
            }
          >
            {project.media[currentIndex].type === "video" ? (
              project.media[currentIndex].src.includes("vimeo.com") ? (
                <VimeoEmbed videoUrl={project.media[currentIndex].src} />
              ) : (
                <video
                  key={project.media[currentIndex].src}
                  src={project.media[currentIndex].src}
                  controls
                  autoPlay
                  className={`media ${animClass}`}
                />
              )
            ) : (
              <img
                key={project.media[currentIndex].src}
                src={project.media[currentIndex].src}
                alt={project.name}
                className={`media ${animClass}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
