'use client';
import styled, { css } from 'styled-components';

export const Menu = styled.ul<{ $isHorizontal: boolean }>`
  ${({ $isHorizontal }) =>
    $isHorizontal &&
    css`
      height: 100%;
    `}
  gap: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
