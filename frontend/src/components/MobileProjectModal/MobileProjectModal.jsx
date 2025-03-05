"use client";
import React, { useState, useRef, useEffect } from "react";
import "./MobileProjectModal.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";
import Button from "../Button/Button";
import MediaModal from "../MediaModal/MediaModal";

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

const useMobileProjectData = (project) => {
  if (!project) return { mainMedia: null, restMedia: [] };
  return { mainMedia: project.media?.[0] || null, restMedia: project.media?.slice(1) || [] };
};

const MobileProjectModal = ({ isOpen, onClose, project, showTexts = true, scrollRef }) => {
  const { mainMedia, restMedia } = useMobileProjectData(project);
  const projectPoster = getPosterFromProject(project);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMediaModalOpen, setMediaModalOpen] = useState(false);

  const mediaContainerRef = useRef(null);

  const handleMediaClick = (index) => {
    setSelectedIndex(index);
    setMediaModalOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;
  const mediaArray = project.media || [];

  const onSwipeNext = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % mediaArray.length;
    });
  };

  const onSwipePrev = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex - 1 + mediaArray.length) % mediaArray.length;
    });
  };

  return (
    <div
      className="mobileModalBackdrop"
      onClick={(e) => {
        if (mediaContainerRef.current && !mediaContainerRef.current.contains(e.target)) {
          console.log("MobileProjectModal - Click fuera de mediaContainer, cerrando modal");
          onClose();
        }
      }}
    >
      <div className="mobileModalContainer" onClick={(e) => e.stopPropagation()} ref={scrollRef}>
        <div className="mobileModalContent" ref={scrollRef}>
          {mainMedia && (
            <div
              id="mediaContainer"
              className="mainMedia"
              ref={mediaContainerRef}
              onClick={() => handleMediaClick(0)}
            >
              {mainMedia.type === "video" ? (
                mainMedia.src.includes("vimeo.com") ? (
                  <VimeoEmbed videoUrl={mainMedia.src} poster={projectPoster} />
                ) : (
                  <video
                    src={mainMedia.src}
                    controls
                    autoPlay
                    poster={projectPoster}
                    className="media"
                  />
                )
              ) : (
                <img src={mainMedia.src} alt={project.name} className="media" />
              )}
            </div>
          )}
          {showTexts && (
            <div className="textContainer">
              {project.howWeDidIt && (
                <div className="projectSection">
                  <h3>H0W WE D1D 1T</h3>
                  {Array.isArray(project.howWeDidIt)
                    ? project.howWeDidIt.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                    : <p>{project.howWeDidIt}</p>}
                </div>
              )}
              {project.roles?.length > 0 && (
                <div className="projectSection">
                  <h3>R0LES</h3>
                  {project.roles.map((role, idx) => <p key={idx}>{role}</p>)}
                </div>
              )}
              {project.details && (
                <div className="projectSection">
                  <h3>DETA1LS</h3>
                  <p>{project.details}</p>
                </div>
              )}
            </div>
          )}
          {restMedia.length > 0 && (
            <div className="restMediaContainer">
              {restMedia.map((mediaItem, idx) => (
                <div
                  key={idx + 1}
                  className="mediaItem"
                  onClick={() => handleMediaClick(idx + 1)}
                >
                  {mediaItem.type === "video" ? (
                    mediaItem.src.includes("vimeo.com") ? (
                      <VimeoEmbed videoUrl={mediaItem.src} poster={projectPoster} />
                    ) : (
                      <video
                        src={mediaItem.src}
                        controls
                        poster={projectPoster}
                        className="media"
                      />
                    )
                  ) : (
                    <img
                      src={mediaItem.src}
                      alt={`${project.name} - ${idx + 2}`}
                      className="media"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div> 
        <Button text="BACK T0 H0ME" onClick={onClose}  fontSize={"16px"}/>
      </div>

      {isMediaModalOpen && selectedIndex !== null && (
        <MediaModal 
          media={mediaArray[selectedIndex]} 
          onClose={() => setMediaModalOpen(false)} 
          projectPoster={projectPoster} 
          projectName={project.name} 
          onSwipeNext={onSwipeNext}
          onSwipePrev={onSwipePrev}
        />
      )}
    </div>
  );
};

export default MobileProjectModal;
