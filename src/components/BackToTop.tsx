"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@once-ui-system/core";
import classNames from "classnames";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 99,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "var(--transition-micro)",
      }}
    >
      <IconButton
        icon="chevronUp"
        size="l"
        variant="secondary"
        onClick={scrollToTop}
        tooltip="Back to top"
      />
    </div>
  );
};
