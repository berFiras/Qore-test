import IconProps from "../../../types/prop-types/IconProps";

const Icon = ({ alt, path, className }: IconProps) => {
  return <img src={path} alt={alt} className={className} />;
};

export default Icon;
