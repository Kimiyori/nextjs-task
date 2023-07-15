import { FC, ReactNode } from "react";
import { styled } from "styled-components";
type TResume = {
  children?: JSX.Element | JSX.Element[] | ReactNode[];
  className?: string;
};
const Article = styled.article`
  background: ${(props) => props.theme.color.Secondary};
  padding: 2rem;
`;
export const ResumeWrapper: FC<TResume> = ({ children, className }) => {
  return (
    <>
      <Article className={className}>{children}</Article>
    </>
  );
};
