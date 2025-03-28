import { ReactNode } from "react";

interface ButtonProps {
  value: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default ButtonProps;
