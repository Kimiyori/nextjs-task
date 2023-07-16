'use client';
import React, { ReactNode, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SubMenu } from './SubMenu';
import Resume from '@assets/icons/header/Resume.svg';
import { sideBar } from '@/data/header';
import { devices } from '@/data/breakpoints';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { SideInfo } from '../SideInfo/SideInfoMain/SideInfo';
const NavIcon = styled.button<{ $click: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.theme.color.Secondary};
  border: 0;
  transform: ${({ $click }) => ($click ? 'rotate(180deg)' : 'rotate(-180deg)')};
  transition-duration: 0.5s;
`;

const SidebarNav = styled.nav<{ $sidebar: boolean }>`
  background: ${(props) => props.theme.color.Background};
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
      <NavIcon $click={isSidebarOpen}>
        <Image src={Resume} alt="Back" onClick={toggleSidebar} width={30} />
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
