import { useState, useEffect } from "react";

export default function useHideOnScroll(threshold = 0) {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return showNav;
}
