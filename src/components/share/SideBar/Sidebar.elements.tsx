'use client';
import React, { ReactNode, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SubMenu } from './SubMenu';
import Friends from '@assets/icons/header/Friends.svg';
import { sideBar } from '@/data/header';
import { devices } from '@/data/breakpoints';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SideInfo } from '../SideInfo/SideInfo';
const NavIcon = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.theme.color.Primary};
  border: 0;
`;

const SidebarNav = styled.nav<{ $sidebar: boolean }>`
  background: ${(props) => props.theme.color.Primary};
  display: flex;
  justify-content: flex-end;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  bottom: 0;
  top: 64px;
  width: 100%;
  right: ${({ $sidebar }) => ($sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 5;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
export const StyledSideInfo = styled(SideInfo)`
  margin: 3rem;
  min-width: 200px;
`;
export const SidebarWrapper = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, toggleSidebar] = useReducer((sidebar) => !sidebar, false);
  const isDesktop = useMediaQuery(devices.lg);
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
  }, [isSidebarOpen]);
  return (
    <>
      <NavIcon>
        <Image src={Friends} alt="Back" onClick={toggleSidebar} />
      </NavIcon>
      <SidebarNav $sidebar={isSidebarOpen}>
        <SidebarWrap>
          {sideBar.map((item, index) => (
            <SubMenu item={item} key={index} toggleSidebar={toggleSidebar} />
          ))}
          {!isDesktop && children}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
