import React, { useState, useEffect } from "react";
// import "./ProgressBar.css";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = `${(scrolled / windowHeight) * 100}%`;
    setScroll(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar position-fixed top-0"
        style={{
          width: scroll,
          height: "5px",
          zIndex: "333",
        }}
      />
    </div>
  );
};

export default ProgressBar;
