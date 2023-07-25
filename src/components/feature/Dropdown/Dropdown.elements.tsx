'use client';
import DropdownIcon from '@assets/icons/common/Dropdown.svg';
import Reload from '@assets/icons/common/Reload.svg';
import Close from '@assets/icons/common/Close.svg';
import { FC, PropsWithChildren, useReducer } from 'react';
import { styled } from 'styled-components';
import { MainBody } from '@/components/share/MainBody/MainBody';

export type DropdownProps = {
  name: string;
  reload: () => void;
} & PropsWithChildren;

const DropdownWrapper: FC<DropdownProps> = ({ name, reload, children }) => {
  const [dropdown, toggle] = useReducer((checked) => !checked, true);
  const [show, changeVisibility] = useReducer((checked) => !checked, true);

  return (
    <StyledMainBody $vertical={false}>
      {show ? (
        <>
          <HeaderNav>
            <HeaderTitle>{name}</HeaderTitle>
            <HeaderNavMenu>
              <li onClick={toggle}>
                <DropdownIcon title="Dropdown" />
              </li>
              <li onClick={reload}>
                <Reload title="Reload" />
              </li>
              <li onClick={changeVisibility}>
                <Close title="Close" />
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
    </StyledMainBody>
  );
};
const StyledMainBody = styled(MainBody)`
  padding: 2rem;
  background: ${(props) => props.theme.color.Secondary};
  display: block;
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
export default DropdownWrapper;
