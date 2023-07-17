import { ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const Textarea = styled.textarea`
  resize: none;
  flex-grow: 2;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.color.Secondary};
  color: ${(props) => props.theme.color.OnSecondary};
`;
export const TextArea = ({
  text,
  placeholder,
  disabled,
  onChange,
}: {
  text: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.style.height = '30px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [text]);
  return (
    <Textarea ref={textareaRef} placeholder={placeholder} disabled={disabled} onChange={onChange} value={text} />
  );
};
