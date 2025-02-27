// components/HomeMedia.jsx
import Image from 'next/image';
import React, { useState } from 'react';
import "./homeMedia.scss";
import VimeoEmbed from "../VimeoEmbed/VimeoEmbed"; 

const HomeMedia = ({ mediaSrc, mediaAlt, mediaNumber, isVideo = false, name, forceVisible = false, onClick }) => {
  const [wasMouseHoverActivated, setMouseHoverActivated] = useState(false);
  
  const updateVisibleByMouseHover = () => {
    if (!wasMouseHoverActivated) {
      setMouseHoverActivated(true);
    }
  };

  const isVimeo = isVideo && mediaSrc.includes("vimeo.com");

  return (
    <div 
      className={`homeMedia mediaNumber-${mediaNumber} ${(wasMouseHoverActivated || forceVisible) ? 'visible' : 'notVisible'}`}
      onMouseOver={updateVisibleByMouseHover}
      onClick={onClick}
    >
      {
        isVideo ? (
          isVimeo ? (
            <VimeoEmbed videoUrl={mediaSrc} />
          ) : (
            <video src={mediaSrc} playsInline muted autoPlay loop></video>
          )
        ) : (
          <Image src={mediaSrc} width={500} height={500} alt={mediaAlt ?? "image"} unoptimized={true} />
        )
      }
      <span className='client'>{name}</span>
    </div>
  );
};

export default HomeMedia;
