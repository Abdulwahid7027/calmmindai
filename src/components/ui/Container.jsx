import React from "react";

export const Container = ({ children, className = "", ...props }) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};
