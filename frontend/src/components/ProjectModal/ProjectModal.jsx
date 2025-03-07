"use client";
import React, { useState, useEffect, useRef } from "react";
import "./projectModal.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";
import Button from "../Button/Button";
import DynamicText from "../../hooks/DynamicTextModal";

const getPosterFromProject = (project) => {
  if (!project) return null;
  if (project.media && project.media.length > 0) {
    const imageMedia = project.media.find(
      (mediaItem) => mediaItem.type === "image"
    );
    if (imageMedia) return imageMedia.src;
  }
  return project.mediaSrc || null;
};

const ProjectModal = ({ isOpen, onClose, project, showTexts = true }) => {
  if (!isOpen || !project) return null;

  const mediaContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(showTexts);
  const [cursorDirection, setCursorDirection] = useState("next");

  const hasText =
    (project.howWeDidIt &&
      (Array.isArray(project.howWeDidIt)
        ? project.howWeDidIt.length > 0
        : true)) ||
    (project.roles && project.roles.length > 0) ||
    project.details;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerNext = () => {
    if (animClass) return;
    setAnimClass("fade-out-up");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < project.media.length ? prevIndex + 1 : 0
      );
      setAnimClass("fade-in-up");
      setTimeout(() => {
        setAnimClass("");
      }, 500);
    }, 500);
  };

  const triggerPrev = () => {
    if (animClass) return;
    setAnimClass("fade-out-down");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : project.media.length - 1
      );
      setAnimClass("fade-in-down");
      setTimeout(() => {
        setAnimClass("");
      }, 500);
    }, 500);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      triggerNext();
    } else if (e.deltaY < 0) {
      triggerPrev();
    }
  };

  const handleMouseMove = (e) => {
    if (!mediaContainerRef.current) return;
    const rect = mediaContainerRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    if (relativeY < rect.height / 2) {
      setCursorDirection("prev");
    } else {
      setCursorDirection("next");
    }
  };

  const handleClickMedia = () => {
    if (cursorDirection === "prev") {
      triggerPrev();
    } else if (cursorDirection === "next") {
      triggerNext();
    }
  };

  const projectPoster = getPosterFromProject(project);

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className={`modalContainer ${cursorDirection}`}
        onClick={(e) => e.stopPropagation()}
      >
        {hasText && (
          <div className="textContainer">
            {isTextVisible && (
              <>
                {project.howWeDidIt && (
                  <div className="projectSection">
                    <DynamicText
                      text="H0W WE D1D 1T"
                      className="howWeDidItHeader"
                    />
                    <div className="spacer" />
                    {Array.isArray(project.howWeDidIt) ? (
                      project.howWeDidIt.map((para, index) => (
                        <DynamicText key={index} text={para} />
                      ))
                    ) : (
                      <DynamicText text={project.howWeDidIt} />
                    )}
                  </div>
                )}
                {project.roles && project.roles.length > 0 && (
                  <div className="projectSection">
                   <DynamicText text="R0LES" className="rolesHeader" />
                    {project.roles.map((role, index) => (
                      <DynamicText
                        key={index}
                        text={role}
                        className="roleClass"
                      />
                    ))}
                  </div>
                )}
                {project.details && (
                  <div className="projectSection">
                    <DynamicText text="DETA1LS" className="detailsHeader" />
                    <DynamicText text={project.details} />
                  </div>
                )}
              </>
            )}
            <Button
              text={isTextVisible ? "H1DE TEXT" : "Sh0w Text"}
              onClick={(e) => {
                e.stopPropagation();
                setIsTextVisible(!isTextVisible);
              }}
              underline
            />
          </div>
        )}
        <div className="modalContent">
          <div
            id="mediaContainer"
            ref={mediaContainerRef}
            className={`mediaContainer ${
              project.media[currentIndex].type === "video" ? "video" : ""
            }`}
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onClick={handleClickMedia}
          >
           <div className="closeButton" onClick={onClose}>x</div>
          <div className="projectName">{project.name}</div>
            {project.media[currentIndex].type === "video" ? (
              project.media[currentIndex].src.includes("vimeo.com") ? (
                <div className={`videoWrapper ${animClass}`}>
                  <VimeoEmbed
                    videoUrl={project.media[currentIndex].src}
                    poster={projectPoster}
                  />
                </div>
              ) : (
                <div className={`videoWrapper ${animClass}`}>
                  <video
                    key={project.media[currentIndex].src}
                    src={project.media[currentIndex].src}
                    controls
                    autoPlay
                    poster={projectPoster}
                    className="media"
                  />
                </div>
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
