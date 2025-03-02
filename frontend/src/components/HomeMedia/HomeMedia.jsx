'use client';
import Image from "next/image";
import React, { useState } from "react";
import "./homeMedia.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed";

const HomeMedia = ({
  media,
  mediaSrc,
  mediaAlt,
  mediaNumber,
  name,
  forceVisible = false,
  onClick,
  isModal = false,
}) => {
  const [wasMouseHoverActivated, setMouseHoverActivated] = useState(false);
  
  const updateVisibleByMouseHover = () => {
    if (!wasMouseHoverActivated) {
      setMouseHoverActivated(true);
    }
  };

  const videoMedia = media && media.find((m) => m.type === "video");

  return (
    <div 
      className={`homeMedia mediaNumber-${mediaNumber} ${(wasMouseHoverActivated || forceVisible) ? 'visible' : 'notVisible'}`}
      onMouseOver={updateVisibleByMouseHover}
      onClick={onClick}
    >
      {isModal && videoMedia ? (
        <VimeoEmbed videoUrl={videoMedia.src} />
      ) : (
        <Image 
          src={mediaSrc} 
          width={500} 
          height={500} 
          alt={mediaAlt ?? "image"} 
          unoptimized={true} 
        />
      )}
      <span className='client'>{name}</span>
    </div>
  );
};

export default HomeMedia;
