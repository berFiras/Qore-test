import React from "react";

interface IconProps {
  alt: string;
  path: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ alt, path, className }) => {
  return <img src={path} alt={alt} className={className} />;
};

export default Icon;
