'use client';
import React, { useState, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { sideBar } from '@/data/header';
import UpButton from '@assets/icons/resume/nav/UpButton.svg';
import Dropdown from '@assets/icons/common/Dropdown.svg';
const SidebarButton = styled.button`
  border: 0;
  background: ${(props) => props.theme.color.Primary};
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  color: ${(props) => props.theme.OnPrimary};
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.normal};
  border-bottom: 1px solid ${(props) => props.theme.color.Outline};
  &:hover {
    background: ${(props) => props.theme.color.Secondary};
    border-left: 4px solid ${(props) => props.theme.color.OnSecondary};
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  color: ${(props) => props.theme.color.OnPrimary};
`;

const DropdownLink = styled(Link)`
  background: ${(props) => props.theme.color.Primary};
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${(props) => props.theme.font.size.normal};
  border-bottom: 1px solid ${(props) => props.theme.color.Outline};
  &:hover {
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
    cursor: pointer;
  }
`;

export const SubMenu = ({ item, toggleSidebar }: { item: typeof sideBar[0]; toggleSidebar: () => void }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = (event: MouseEvent<HTMLButtonElement>) => {
    item.children && event.preventDefault();
    setSubnav(!subnav);
  };

  return (
    <>
      <SidebarButton onClick={(event: MouseEvent<HTMLButtonElement>) => item.children && showSubnav(event)}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{subnav ? <Image src={UpButton} alt="Back" /> : <Image src={Dropdown} alt="Back" />}</div>
      </SidebarButton>
      {subnav &&
        item.children.map((item, index) => {
          return (
            <DropdownLink href={item.url} key={index} onClick={toggleSidebar}>
              {<Image loading="eager" src={item.img.image} alt={item.img.altName} />}
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
