import React, { ReactNode } from "react";

interface ButtonProps {
  value: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  value,
  onClick,
  className = "",
  ariaLabel,
  type = "button",
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {value}
    </button>
  );
};

export default Button;
