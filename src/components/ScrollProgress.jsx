// components/ScrollProgress.jsx
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
      <div
        className="h-full bg-cyan-400 neon-glow transition-all duration-75"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
