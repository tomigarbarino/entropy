import Image from 'next/image'
import React from 'react';
import "./homeMedia.scss"
import { useState } from 'react';

const HomeMedia = ({mediaSrc, mediaAlt, mediaNumber, isVideo = false, name, mustBeVisible: forceVisible = false}) => {
  const [wasMouseHoverActivated, setMouseHoverActivated] = useState(false);
  const updateVisibleByMouseHover = () => {
    if (!wasMouseHoverActivated) {
      setMouseHoverActivated(true);
    }
  }
  return (
    <div className={`homeMedia mediaNumber-${mediaNumber} ${(wasMouseHoverActivated || forceVisible) ? 'visible' : 'notVisible'}`} onMouseOver={updateVisibleByMouseHover} >
        {
            isVideo ? (
                <video src={mediaSrc} playsInline muted autoPlay loop></video>
            ) : (
                <Image src={mediaSrc} width={500} height={500} alt={mediaAlt ?? "image"} unoptimized={true} />
            )
        }
    </div>
  )
}

export default HomeMedia