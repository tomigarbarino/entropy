"use client";
import React, { useState, useRef } from "react";
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

  const [isMediaModalOpen, setMediaModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setMediaModalOpen(true);
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="mobileModalBackdrop"
      onClick={(e) => {
        if (!isMediaModalOpen) {
          console.log("MobileProjectModal - Clic fuera, cerrando MobileProjectModal");
          onClose();
        }
      }}
    >
      <div className="mobileModalContainer" onClick={(e) => e.stopPropagation()} ref={scrollRef}>
        <div className="mobileModalContent" ref={scrollRef}>
          {mainMedia && (
            <div id="mediaContainer" className="mainMedia" onClick={() => handleMediaClick(mainMedia)}>
              {mainMedia.type === "video" ? (
                mainMedia.src.includes("vimeo.com") ? (
                  <VimeoEmbed videoUrl={mainMedia.src} poster={projectPoster} />
                ) : (
                  <video src={mainMedia.src} controls autoPlay poster={projectPoster} className="media" />
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
                  <h3>HH0W WE D1D 1T</h3>
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
            <div id="mediaContainer" className="restMediaContainer">
              {restMedia.map((mediaItem, idx) => (
                <div
                  key={idx}
                  className="mediaItem"
                  onClick={() => handleMediaClick(mediaItem)}
                >
                  {mediaItem.type === "video" ? (
                    mediaItem.src.includes("vimeo.com") ? (
                      <VimeoEmbed videoUrl={mediaItem.src} poster={projectPoster} />
                    ) : (
                      <video src={mediaItem.src} controls poster={projectPoster} className="media" />
                    )
                  ) : (
                    <img src={mediaItem.src} alt={`${project.name} - ${idx + 2}`} className="media" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <Button text="Back to Home" onClick={onClose} />
      </div>

      {isMediaModalOpen && (
        <MediaModal 
          media={selectedMedia} 
          onClose={() => setMediaModalOpen(false)} 
          projectPoster={projectPoster} 
          projectName={project.name} 
        />
      )}
    </div>
  );
};

export default MobileProjectModal;
