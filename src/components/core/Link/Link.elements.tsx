'use client';

import { useHover } from '@/hooks/useHover';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type THNavLink = {
  url: string;
  img: { image: string; altName: string };
  name: string;
  isHorizontal?: boolean;
};

export type TNavLinkWrapper = {
  url: string;
  children?: ReactNode;
};

export const LinkContainer = styled.li<{ $isActive: boolean }>`
  text-align: center;
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${(props) => props.theme.color.Primary};
    `}
`;
export const LinkText = styled.p<{ $isHorizontal: boolean }>`
  ${({ $isHorizontal }) =>
    $isHorizontal
      ? css`
          display: inline;
        `
      : css`
          margin: 0;
        `}
  vertical-align: middle;
  font-weight: ${(props) => props.theme.font.weight};
`;
export const LinkAnchor = styled(Link)`
  text-decoration: none;
  vertical-align: middle;
  color: ${(props) => props.theme.color.OnPrimary};
`;
export const StyledImage = styled(Image)`
  vertical-align: middle;
`;
export const NavLinkWrapper = ({ url, children }: TNavLinkWrapper) => {
  const { isHover, changeHoverState } = useHover();
  const location = usePathname();
  return (
    <LinkContainer
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
      $isActive={location === url || isHover}
    >
      {children}
    </LinkContainer>
  );
};
