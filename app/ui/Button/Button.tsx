import React from "react";

interface ButtonProps {
  title: string;
  kind?: "primary" | "secondary" | "teritary";
  size?: "s" | "m" | "l";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    kind = "primary",
    size = "m",
    disabled = false,
    isLoading,
    className = "",
  } = props;

  const sizeOptions = {
    s: "h-8 px-3 text-lg",
    m: "h-11 px-4 text-xl",
    l: "h-14 px-6 text-2xl",
  };

  const stylingOptions = {
    primary: `text-white bg-blue-500 ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-blue-700"}`,
    secondary: `text-white bg-blue-200  ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-blue-700"}`,
    teritary: `text-white bg-blue-500  ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-blue-700"}`,
  };
  return (
    <button
      disabled={disabled || isLoading}
      className={`${stylingOptions[kind]} ${sizeOptions[size]} ${className}}`}
    >
      {title}
    </button>
  );
};

export default Button;
