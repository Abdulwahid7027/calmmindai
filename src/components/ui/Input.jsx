import React from "react";

export const Input = ({ type = "text", className = "", ...props }) => {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";

  return (
    <Component
      type={!isTextarea ? type : undefined}
      className={`input ${className}`}
      {...props}
    />
  );
};
