"use client";
import React, { useEffect } from "react";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";
import "./MediaModal.scss";

const MediaModal = ({ media, onClose, projectPoster, projectName }) => {
  if (!media) return null;
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        console.log("Escape presionado, cerrando solo MediaModal");
        onClose(); 
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="mediaModalBackdrop"
      onClick={(e) => {
        console.log("MediaModal - Clic fuera, cerrando solo MediaModal");
        e.stopPropagation(); 
        onClose();
      }}
    >
      <div
        className="mediaModalContainer"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === "video" ? (
          media.src.includes("vimeo.com") ? (
            <VimeoEmbed videoUrl={media.src} poster={projectPoster} />
          ) : (
            <video src={media.src} controls autoPlay poster={projectPoster} className="expanded-media" />
          )
        ) : (
          <img src={media.src} alt={projectName} className="expanded-media" />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
