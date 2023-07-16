'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const AsideBody = styled.aside`
  background: ${(props) => props.theme.color.Secondary};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledUserAvatar = styled(Image)`
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const Name = styled.h4`
  font-weight: ${(props) => props.theme.font.weight};
  font-size: ${(props) => props.theme.font.size.middle};
  margin: 0;
`;
export const Activity = styled.h5`
  font-weight: ${(props) => props.theme.font.weight};
  font-style: italic;
  font-size: ${(props) => props.theme.font.size.normal};
  margin: 0;
`;

export const LinksList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
