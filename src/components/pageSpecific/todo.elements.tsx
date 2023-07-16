'use client'
import styled from 'styled-components';


export const MainBackground = styled.main`
  background: ${(props) => props.theme.color.Background};
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  display: flex;
  gap: 3rem;
`;