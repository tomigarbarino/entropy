"use client";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";
import "./MediaModal.scss";

const MediaModal = ({
  media,
  onClose,
  projectPoster,
  projectName,
  onSwipeNext, 
  onSwipePrev
}) => {
  if (!media) return null;

  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const swipeThreshold = 50;

  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const mediaRef = useRef(null);

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

  const handleTouchStart = (e) => {
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStartY === null || touchEndY === null) return;
    const deltaY = touchStartY - touchEndY;
    if (Math.abs(deltaY) > swipeThreshold) {
      if (deltaY > 0 && onSwipeNext) {
        onSwipeNext();
      } else if (deltaY < 0 && onSwipePrev) {
        onSwipePrev();
      }
    }
    setTouchStartY(null);
    setTouchEndY(null);
  };

  const handleLoad = () => {
    if (mediaRef.current) {
      const width = mediaRef.current.naturalWidth || mediaRef.current.videoWidth;
      const height = mediaRef.current.naturalHeight || mediaRef.current.videoHeight;
      setDimensions({ width, height });
    }
  };

  const handleBackdropTouchEnd = (e) => {
    if (e.target.classList.contains("mediaModalBackdrop")) {
      onClose();
    }
  };

  const containerStyle =
    dimensions.width && dimensions.height
      ? { width: dimensions.width, height: dimensions.height }
      : {};

  return ReactDOM.createPortal(
    <div 
      className="mediaModalBackdrop" 
      onClick={onClose}
      onTouchEnd={handleBackdropTouchEnd}
    >
      <div
        className="mediaModalContainer"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={containerStyle}
      >
        {media.type === "video" ? (
          media.src.includes("vimeo.com") ? (
            <VimeoEmbed videoUrl={media.src} poster={projectPoster} />
          ) : (
            <video
              ref={mediaRef}
              src={media.src}
              controls
              autoPlay
              poster={projectPoster}
              className="expanded-media"
              onLoadedData={handleLoad}
            />
          )
        ) : (
          <img
            ref={mediaRef}
            src={media.src}
            alt={projectName}
            className="expanded-media"
            onLoad={handleLoad}
          />
        )}
      </div>
    </div>,
    document.body
  );
};

export default MediaModal;
