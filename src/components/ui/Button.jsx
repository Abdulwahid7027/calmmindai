import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
