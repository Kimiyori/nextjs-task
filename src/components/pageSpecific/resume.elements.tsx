'use client';
import { styled } from 'styled-components';
import { FC, PropsWithChildren, ReactNode } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { devices } from '@/data/breakpoints';
import { MainBody } from '@components/share/MainBody/MainBody';

export const ResumeWrapper = ({ children, className }: { className?: string } & PropsWithChildren) => {
  return <Article className={className}>{children}</Article>;
};

type ResumePageWrapperProps = { sidebar: ReactNode } & PropsWithChildren;

export const ResumePageWrapper: FC<ResumePageWrapperProps> = ({ children, sidebar }) => {
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <MainBody $vertical={false}>
      <ResumeHeaderSection>{children}</ResumeHeaderSection>
      {isDesktop && sidebar}
    </MainBody>
  );
};
export const ResumeWrapperSkills = styled(ResumeWrapper)`
  h2 {
    margin: 0;
    color: ${(props) => props.theme.color.OnSecondary};
    font-size: ${(props) => props.theme.font.size.big};
  }
`;
export const MainResumeWrapper = styled.main<{ $horisontal: boolean }>`
  background: ${(props) => props.theme.color.Background};
  margin: 3rem;
  display: flex;
  gap: 3rem;
`;
export const ResumeHeaderSection = styled.section`
  gap: 3rem;
  flex-direction: column;
  height: 100%;
  display: flex;
  flex: 1 0;
`;
export const ResumeImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 200px;
  }
  h6 {
    text-align: center;
    position: absolute;
    font-size: ${(props) => props.theme.font.size.big};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
    opacity: 0.4;
    margin: 0;
  }
`;

const Article = styled.article`
  background: ${(props) => props.theme.color.Secondary};
  padding: 2rem;
`;
