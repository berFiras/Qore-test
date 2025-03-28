import { JSX } from "react";

interface TitleProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Title = ({ text, level = 1, className }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{text}</Tag>;
};

export default Title;
