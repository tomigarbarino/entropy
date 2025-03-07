import React, { useEffect, useRef } from "react";

function isOverlapping(r1, r2) {
  const offset = 0; 
  return !(
    (r1.right - offset) < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

const DynamicTextModal = ({ text, mediaContainerId = "mediaContainer" }) => {
  const textRef = useRef(null);
  const animationRef = useRef(null);

  const updateTextColors = () => {
    const mediaElement = document.getElementById(mediaContainerId);
    if (!mediaElement || !textRef.current) return;

    const letterSpans = textRef.current.querySelectorAll(".letterSpan");
    const transitionClasses = ["fade-out-up", "fade-in-up", "fade-out-down", "fade-in-down"];
    if (transitionClasses.some(cls => mediaElement.classList.contains(cls))) {
      letterSpans.forEach((span) => {
        span.classList.remove("highlight");
        span.style.color = "black";
      });
      return;
    } else {

      letterSpans.forEach((span) => {
        span.style.color = "";
      });
    }

    const mediaRect = mediaElement.getBoundingClientRect();
    letterSpans.forEach((span) => {
      const spanRect = span.getBoundingClientRect();
      if (isOverlapping(spanRect, mediaRect)) {
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
      .map(letter => letter === " " ? " " : `<span class="letterSpan">${letter}</span>`)
      .join("");
    
    }
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, mediaContainerId]);

  return <p ref={textRef} className="howWeDidItParagraph"></p>;
};

export default DynamicTextModal;
