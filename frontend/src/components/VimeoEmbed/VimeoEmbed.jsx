'use client';
import React from "react";

function VimeoEmbed({ videoUrl }) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  const autoplayUrl = videoUrl.includes('?')
    ? `${videoUrl}&autoplay=1&background=1&title=0&byline=0&portrait=0`
    : `${videoUrl}?autoplay=1&background=1&title=0&byline=0&portrait=0`;

  return (
    <div style={containerStyle}>
      <iframe
        src={autoplayUrl}
        style={iframeStyle}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
    </div>
  );
}

export default VimeoEmbed;
