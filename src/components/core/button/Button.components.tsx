import ButtonProps from "../../../types/prop-types/ButtonProps";

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
