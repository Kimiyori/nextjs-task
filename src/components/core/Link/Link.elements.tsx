'use client';
import useHover from '@hooks/useHover';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';

export type NavLinkWrapperProps = {
  url: string;
};

const NavLinkWrapper: FC<NavLinkWrapperProps & PropsWithChildren> = ({ url, children }) => {
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
      background: ${(props) => props.theme.color.Surface};
    `}
`;
export const LinkText = styled.p<{ $isHorizontal: boolean; $primary?: boolean }>`
  color: ${(props) => (props.$primary ? props.theme.color.OnPrimary : props.theme.color.OnSecondary)};
  ${({ $isHorizontal }) =>
    $isHorizontal
      ? css`
          display: inline;
        `
      : css`
          margin: 0;
        `}
  margin:0;
  font-weight: ${(props) => props.theme.font.weight};
`;
export const LinkAnchor = styled(Link)<{ $isHorizontal?: boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$isHorizontal ? 'row' : 'column')};
  color: ${(props) => props.theme.color.OnPrimary};
`;

export default NavLinkWrapper;
