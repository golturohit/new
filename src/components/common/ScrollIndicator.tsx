"use client";
import React, { useEffect } from "react";

const ScrollIndicator: React.FC = () => {
  const handleScrollIndicator = () => {
    const scrollIndicator = document.getElementById("scroll-indicator");
    if (!scrollIndicator) return;

    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const widthPercentage = (window.scrollY / maxHeight) * 100;
    scrollIndicator.style.width = `${widthPercentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollIndicator);
    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  return (
    <div
      id="scroll-indicator"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        backgroundColor: "red",
      }}
    />
  );
};

export default ScrollIndicator;
