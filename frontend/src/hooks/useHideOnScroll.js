import { useState, useEffect } from "react";

export default function useHideOnScroll(threshold = 0) {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (prevScrollPos > currentScrollPos || currentScrollPos <= threshold) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return showNav;
}
