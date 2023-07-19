'use client';
import UpButton from '@assets/icons/resume/nav/UpButton.svg';
import DownButton from '@assets/icons/common/Dropdown.svg';
import { FC, PropsWithChildren, useReducer } from 'react';
import { styled } from 'styled-components';
const AsideBody = styled.aside`
  background: ${(props) => props.theme.color.Secondary};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
  }
`;

const NavTitle = styled.div`
  color: ${(props) => props.theme.color.OnSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  h4 {
    margin: 0;
    font-size: ${(props) => props.theme.font.size.normal};
  }
`;
export const NavMenu = styled.ul`
  color: ${(props) => props.theme.color.OnSecondary};
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  width: 100%;
  gap: 1rem;
`;
type SideNavigationWrapperProps = { title: string } & PropsWithChildren;
export const SideNavigationWrapper: FC<SideNavigationWrapperProps> = ({ title, children }) => {
  const [show, toggle] = useReducer((checked) => !checked, true);
  return (
    <AsideBody>
      <NavTitle onClick={toggle}>
        <h4>{title}</h4>
        {show ? <UpButton title="UpButton" /> : <DownButton title="DownButton" />}
      </NavTitle>
      {show && children}
    </AsideBody>
  );
};
