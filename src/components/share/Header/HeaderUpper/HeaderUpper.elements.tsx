'use client';
import { styled } from 'styled-components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { devices } from '@/data/breakpoints';
import { ReactNode } from 'react';
import { Sidebar } from '../../SideBar/Sidebar';

export const UpperHeaderSection = styled.section`
  background: ${(props) => props.theme.color.Secondary};
  min-height: 64px;
  z-index: 1;
  margin: 0;
  padding: 0;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const LeftElement = styled.figure`
  color: ${(props) => props.theme.color.OnSecondary};
  margin: 0;
  display: flex;
  align-items: center;
  span {
    margin-left: 1rem;
    font-size: ${(props) => props.theme.font.size.middle};
    font-weight: ${(props) => props.theme.font.weight};
  }
`;

export const UpperHeaderRight = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery(devices.lg);
  return <>{isDesktop ? children : <Sidebar />}</>;
};
