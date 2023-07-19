'use client';
import React, { useState, MouseEvent, FC } from 'react';
import Link from 'next/link';
import { styled } from 'styled-components';
import UpButton from '@assets/icons/resume/nav/UpButton.svg';
import Dropdown from '@assets/icons/common/Dropdown.svg';
import { NavLinkProps } from '@/utils/types';
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
type SubMenuProps = {
  item: {
    title: string;
    children: NavLinkProps[];
  };
  toggleSidebar: () => void;
};
export const SubMenu: FC<SubMenuProps> = ({ item, toggleSidebar }) => {
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
        <div>{subnav ? <UpButton title="Back" /> : <Dropdown title="Back" />}</div>
      </SidebarButton>
      {subnav &&
        item.children.map((item, index) => {
          return (
            <DropdownLink href={item.url} key={index} onClick={toggleSidebar}>
              <item.img.image title={item.img.altName} />
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
