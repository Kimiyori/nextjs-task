'use client';
import { styled } from 'styled-components';
export const AddressListWrapper = styled.address`
  display: flex;
  flex-direction: column;
  gap: 4;
  justify-content: space-evenly;
  margin-bottom: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

export const AddressElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.OnSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
