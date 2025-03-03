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

  const updateTextColors = () => {
    const mediaElement = document.getElementById("mediaContainer");
    if (!mediaElement || !textRef.current) return;

    const mediaRect = mediaElement.getBoundingClientRect();
    const letterSpans = textRef.current.querySelectorAll(".letterSpan");

    letterSpans.forEach((span) => {
      const spanRect = span.getBoundingClientRect();
      if (isOverlapping(spanRect, mediaRect)) {
        span.classList.add("highlight");
      } else {
        span.classList.remove("highlight");
      }
    });
  };

  useEffect(() => {
    if (textRef.current) {
      const letters = text.split("");
      textRef.current.innerHTML = letters
        .map((letter) => `<span class="letterSpan">${letter}</span>`)
        .join("");
    }

    updateTextColors();

    window.addEventListener("resize", updateTextColors);
    window.addEventListener("scroll", updateTextColors);

    return () => {
      window.removeEventListener("resize", updateTextColors);
      window.removeEventListener("scroll", updateTextColors);
    };
  }, [text]);

  return <p ref={textRef} className="howWeDidItParagraph"></p>;
};

export default DynamicText;
