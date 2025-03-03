'use client';
import React, { useState } from "react";

function VimeoEmbed({ videoUrl, poster, onOverlayClick }) {
  const [loaded, setLoaded] = useState(false);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden'
  };
  

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: loaded ? 'block' : 'none'
  };

  const posterStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: loaded ? 'none' : 'block'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'transparent',
    cursor: 'inherit'
  };

  const autoplayUrl = videoUrl.includes('?')
    ? `${videoUrl}&autoplay=1&background=1&title=0&byline=0&portrait=0`
    : `${videoUrl}?autoplay=1&background=1&title=0&byline=0&portrait=0`;

  return (
    <div style={containerStyle}>
      {poster && (
        <img src={poster} alt="Video poster" style={posterStyle} />
      )}
      <iframe
        src={autoplayUrl}
        style={iframeStyle}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
        onLoad={() => setLoaded(true)}
      ></iframe>
      <div style={overlayStyle} onClick={onOverlayClick}></div>
    </div>
  );
}

export default VimeoEmbed;
