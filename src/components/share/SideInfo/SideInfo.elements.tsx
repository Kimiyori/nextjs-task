'use client';
import { styled } from 'styled-components';
import { ReactNode } from 'react';

const SideWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const SideInfoWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <>
      <SideWrapper className={className}>{children}</SideWrapper>
    </>
  );
};
