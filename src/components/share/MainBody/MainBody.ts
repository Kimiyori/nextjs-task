'use client';
import { css, styled } from 'styled-components';

export const MainBody = styled.main<{ $vertical: boolean }>`
  background: ${(props) => props.theme.color.Background};
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 3rem;
  }
  ${({ $vertical }) =>
    $vertical &&
    css`
      flex-direction: column;
      align-items: center;
    `}
`;
