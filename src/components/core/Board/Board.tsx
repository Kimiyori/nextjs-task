'use client';
import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.color.OnBackground};
`;

export const Board = ({ title }: { title: string }) => {
  return <Title>{title}</Title>;
};
