'use client';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type TInput = {
  inputValue: string;
  actionButtons?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = styled.input`
  padding: 0.5rem;
  flex-grow: 2;
  outline: none;
  border: none;
  background: ${(props) => props.theme.color.Secondary};
  color: ${(props) => props.theme.color.OnSecondary};
`;
const InputWrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;
export const InputForm = ({ inputValue, actionButtons, onChange, placeholder }: TInput) => {
  return (
    <>
      <InputWrapper>
        <Input placeholder={placeholder} onChange={onChange} value={inputValue} type="text" />
        {actionButtons}
      </InputWrapper>
    </>
  );
};
