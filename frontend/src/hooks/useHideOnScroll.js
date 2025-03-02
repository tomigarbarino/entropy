import { useState, useEffect } from "react";

const useHideOnScroll = (threshold = 0, containerRef = null) => {
  const [showNav, setShowNav] = useState(true);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      setContainer(containerRef.current);
    } else {
      setContainer(window);
    }
  }, [containerRef]);

  useEffect(() => {
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container === window ? window.scrollY : container.scrollTop;
      if (scrollPos > threshold) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [container, threshold]);

  return showNav;
};

export default useHideOnScroll;
