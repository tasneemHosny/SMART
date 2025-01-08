import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    container: {
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      cursor: "pointer",
      zIndex: 50,
      borderRadius: "50%",
      padding: "0.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: "background-color 0.3s ease",
    },

  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        style={styles.container}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.hover.backgroundColor)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.container.backgroundColor)}
        aria-label="Scroll to top"
      >
        <ChevronUp width="50px" height="50px" color="black" />
      </div>
    )
  );
};

export default ScrollToTopArrow;
