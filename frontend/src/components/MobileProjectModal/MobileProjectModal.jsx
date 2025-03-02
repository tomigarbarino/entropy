"use client";
import React, { useEffect } from "react";
import "./MobileProjectModal.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";

const useMobileProjectData = (project) => {
  if (!project) return { mainMedia: null, restMedia: [] };
  const mainMedia = project.media?.[0] || null;
  const restMedia = project.media?.slice(1) || [];
  return { mainMedia, restMedia };
};

const MobileProjectModal = ({ isOpen, onClose, project, showTexts = true }) => {
  if (!isOpen || !project) return null;

  const { mainMedia, restMedia } = useMobileProjectData(project);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className="mobileModalBackdrop" onClick={onClose}>
      <div className="mobileModalContainer" onClick={handleModalClick}>
        <div className="mobileModalContent">
          {mainMedia && (
            <div className="mainMedia">
              {mainMedia.type === "video" ? (
                mainMedia.src.includes("vimeo.com") ? (
                  <VimeoEmbed videoUrl={mainMedia.src} />
                ) : (
                  <video
                    src={mainMedia.src}
                    controls
                    autoPlay
                    className="media"
                  />
                )
              ) : (
                <img
                  src={mainMedia.src}
                  alt={project.name}
                  className="media"
                />
              )}
            </div>
          )}
          {showTexts && (
            <div className="textContainer">
              {project.howWeDidIt && (
                <div className="projectSection">
                  <h3>How We Did It</h3>
                  {Array.isArray(project.howWeDidIt)
                    ? project.howWeDidIt.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    : <p>{project.howWeDidIt}</p>}
                </div>
              )}

              {project.roles && project.roles.length > 0 && (
                <div className="projectSection">
                  <h3>Roles</h3>
                  {project.roles.map((role, idx) => (
                    <p key={idx}>{role}</p>
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
          {restMedia.length > 0 && (
            <div className="restMediaContainer">
              {restMedia.map((mediaItem, idx) => (
                <div key={idx} className="mediaItem">
                  {mediaItem.type === "video" ? (
                    mediaItem.src.includes("vimeo.com") ? (
                      <VimeoEmbed videoUrl={mediaItem.src} />
                    ) : (
                      <video
                        src={mediaItem.src}
                        controls
                        autoPlay
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
      </div>
    </div>
  );
};

export default MobileProjectModal;
