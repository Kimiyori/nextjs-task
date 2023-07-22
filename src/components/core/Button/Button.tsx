'use client';
import { FC, MouseEventHandler } from 'react';
import { styled } from 'styled-components';

type ButtonProps = {
  text: string;
  onClick?: (event?: MouseEventHandler<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ text, onClick, className, isDisabled = false }) => {
  return (
    <ButtonElement className={className} disabled={isDisabled} onClick={() => onClick && onClick()}>
      {text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.theme.color.Primary};
  cursor: pointer;
  color: ${(props) => props.theme.color.OnPrimary};
  border: 0;
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  font-size: ${(props) => props.theme.font.size.normal};
  min-height: 40px;
  &:hover {
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
  }
  &:disabled {
    background: ${(props) => props.theme.color.Surface};
    cursor: auto;
  }
`;
export default ButtonElement;
