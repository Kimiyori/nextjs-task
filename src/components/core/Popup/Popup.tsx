import { styled } from 'styled-components';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { ReactNode } from 'react';

const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupBody = styled.div.attrs(({ ref }) => ({
  ref: ref,
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  background: #f0ac35;
  padding: 2rem;
`;

export const Popup = ({ toggleVisible, children }: { toggleVisible: () => void; children?: ReactNode }) => {
  const ref = useOutsideClick(toggleVisible);
  return (
    <PopupContainer>
      <PopupBody ref={ref}>{children}</PopupBody>
    </PopupContainer>
  );
};
