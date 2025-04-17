import React from "react";
import "./Loader.css";

const LoadingSpinner = ({
  size = "medium",
  color = "#4fa94d",
  className = "",
}) => {
  const sizeMap = {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
  };

  const spinnerSize = sizeMap[size] || sizeMap.medium;

  return (
    <div className={`loading-spinner-container ${className}`}>
      <div
        className="loading-spinner"
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
      <p className="loading-text" style={{ color }}>
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
