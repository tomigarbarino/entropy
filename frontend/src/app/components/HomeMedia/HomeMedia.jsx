import Image from 'next/image'
import React from 'react';
import "./homeMedia.scss"

const HomeMedia = ({mediaSrc, mediaAlt, mediaNumber, isVideo = false}) => {
  return (
    <div className={`homeMedia mediaNumber-${mediaNumber}`}>
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