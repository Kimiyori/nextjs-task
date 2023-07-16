'use client';
import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

type TButton = {
  text: string;
  onClick?: (event?: MouseEventHandler<HTMLButtonElement>) => void;
  isDisabled?: boolean;
};

const ButtonElement = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.theme.color.Primary};
  cursor: pointer;
  color: ${(props) => props.theme.color.OnPrimary};
  border: 0;
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  &:hover {
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
  }
  &:disabled {
    background: ${(props) => props.theme.color.Surface};
    cursor: auto;
  }
`;
export const Button = ({ text, onClick, isDisabled = false }: TButton) => {
  return (
    <ButtonElement disabled={isDisabled} onClick={() => onClick && onClick()}>
      {text}
    </ButtonElement>
  );
};
