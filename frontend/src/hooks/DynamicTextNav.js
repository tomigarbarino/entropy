import React, { useEffect, useRef } from "react";

function isOverlapping(r1, r2) {
  const offset = 11; 
  return !(
    (r1.right - offset) < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

const DynamicText = ({ text }) => {
  const textRef = useRef(null);
  const animationRef = useRef(null);

  const updateTextColors = () => {
    const mediaElements = document.querySelectorAll(".homeMediaGrid img, .homeMediaGrid video");
    if (!textRef.current || mediaElements.length === 0) return;

    const letterSpans = textRef.current.querySelectorAll(".letterSpan");

    letterSpans.forEach((span) => {
      const spanRect = span.getBoundingClientRect();
      const overlapping = Array.from(mediaElements).some(mediaElement => {
        const mediaRect = mediaElement.getBoundingClientRect();
        return isOverlapping(spanRect, mediaRect);
      });

      if (overlapping) {
        span.classList.add("highlight");
      } else {
        span.classList.remove("highlight");
      }
    });
  };

  const animate = () => {
    updateTextColors();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (textRef.current) {
      const letters = text.split("");
      textRef.current.innerHTML = letters
        .map((letter) => `<span class="letterSpan">${letter}</span>`)
        .join("");
    }
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text]);

  return <p ref={textRef} className="howWeDidItParagraph"></p>;
};

export default DynamicText;
