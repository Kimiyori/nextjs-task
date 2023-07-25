'use client';
import { FC, PropsWithChildren, useReducer } from 'react';
import { styled } from 'styled-components';
import UpButton from '@assets/icons/resume/nav/UpButton.svg';
import DownButton from '@assets/icons/common/Dropdown.svg';

type SideCommentsWrapperProps = { title: string } & PropsWithChildren;

const SideCommentsWrapper: FC<SideCommentsWrapperProps> = ({ title, children }) => {
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
export const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  h4 {
    margin: 0;
    color: ${(props) => props.theme.color.OnSecondary};
    font-size: ${(props) => props.theme.font.size.normal};
  }
`;
export const AsideBody = styled.aside`
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
  margin-bottom: 2rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  display: block;
  min-height: 100px;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
export const CommentButton = styled.button`
  width: 100%;
  color: ${(props) => props.theme.color.OnPrimary};
  background: ${(props) => props.theme.color.Primary};
  border: 1px solid;
  padding: 0.5rem;
`;
export default SideCommentsWrapper;
