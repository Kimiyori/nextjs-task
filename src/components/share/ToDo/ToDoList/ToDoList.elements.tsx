'use client';
import styled from 'styled-components';

export const ToDoListContainer = styled.div<{ $bgColor: string }>`
  width: 100%;
  min-height: 400px;
  text-align: center;
  background: ${(props) => props.theme.color.Secondary};
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 4rem 0 4rem;
  }
  h3 {
    background: rgba(${(props) => props.$bgColor},0.3);
    margin:0;
    padding:1rem;
    margin-bottom:1rem;
  }
`;
