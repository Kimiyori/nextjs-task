'use client';
import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';

const SideWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
type SideInfoWrapperProps = { className?: string } & PropsWithChildren;
export const SideInfoWrapper: FC<SideInfoWrapperProps> = ({ className, children }) => {
  return <SideWrapper className={className}>{children}</SideWrapper>;
};
