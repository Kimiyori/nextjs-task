'use client';
import DropdownIcon from '@assets/icons/common/Dropdown.svg';
import Reload from '@assets/icons/common/Reload.svg';
import Close from '@assets/icons/common/Close.svg';
import { ReactNode, useReducer } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

const MainBody = styled.main`
  margin: 3rem;
  padding: 2rem;
  background: ${(props) => props.theme.color.Secondary};
`;
const HeaderNav = styled.div`
  margin-bottom: 1rem;
  justify-content: space-between;
  display: flex;
`;
const HeaderTitle = styled.h4`
  font-size: ${(props) => props.theme.font.size.middle};
  margin: 0;
`;
const HeaderNavMenu = styled.ul`
  gap: 1rem;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;
const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme.color.Primary};
  border: 1px solid;
  padding: 0.5rem;
`;
export const DropdownWrapper = ({
  name,
  reload,
  children,
}: {
  name: string;
  reload: () => void;
  children?: ReactNode;
}) => {
  const [dropdown, toggle] = useReducer((checked) => !checked, true);
  const [show, changeVisibility] = useReducer((checked) => !checked, true);

  return (
    <MainBody>
      {show ? (
        <>
          <HeaderNav>
            <HeaderTitle>{name}</HeaderTitle>
            <HeaderNavMenu>
              <li onClick={toggle}>
                <Image src={DropdownIcon} alt="Dropdown" />
              </li>
              <li onClick={reload}>
                <Image src={Reload} alt="Reload" />
              </li>
              <li onClick={changeVisibility}>
                <Image src={Close} alt="Close" />
              </li>
            </HeaderNavMenu>
          </HeaderNav>
          {dropdown && children}
        </>
      ) : (
        <Button onClick={changeVisibility} type="button">
          Why is it here?...
        </Button>
      )}
    </MainBody>
  );
};
