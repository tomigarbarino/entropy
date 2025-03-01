import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 768; 

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
