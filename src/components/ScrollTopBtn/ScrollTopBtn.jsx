import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div
        className="d-flex rounded-circle align-items-center justify-content-center inner"
        style={{ width: "40px", height: "40px" }}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
