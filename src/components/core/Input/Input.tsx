'use client';
import { ChangeEvent } from 'react';
import { styled } from 'styled-components';
import { TextArea } from '../TextArea/TestArea';

type TInput = {
  inputValue: string;
  actionButtons?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;
export const InputForm = ({ inputValue, actionButtons, onChange, placeholder }: TInput) => {

  return (
    <>
      <InputWrapper>
        <TextArea placeholder={placeholder} onChange={onChange} text={inputValue} />
        {actionButtons}
      </InputWrapper>
    </>
  );
};
