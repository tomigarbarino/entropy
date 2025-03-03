"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";
import "./MediaModal.scss";

const MediaModal = ({ media, onClose, projectPoster, projectName }) => {
  if (!media) return null;
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        console.log("Escape presionado, cerrando MediaModal");
        onClose(); 
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="mediaModalBackdrop"
      onClick={onClose}
    >
      <div className="mediaModalContainer">
        {media.type === "video" ? (
          media.src.includes("vimeo.com") ? (
            <VimeoEmbed videoUrl={media.src} poster={projectPoster} />
          ) : (
            <video
              src={media.src}
              controls
              autoPlay
              poster={projectPoster}
              className="expanded-media"
            />
          )
        ) : (
          <img src={media.src} alt={projectName} className="expanded-media" />
        )}
      </div>
    </div>,
    document.body
  );
};

export default MediaModal;
