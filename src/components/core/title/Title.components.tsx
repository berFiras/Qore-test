import { JSX } from "react";
import TitleProps from "../../../types/prop-types/TitleProps";

const Title = ({ text, level = 1, className }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{text}</Tag>;
};

export default Title;
