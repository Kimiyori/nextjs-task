"use client";

import { useHover } from "@/hooks/useHover";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { usePathname } from "next/navigation";
type THeaderLink = {
  url: string;
  img: { image: string; altName: string };
  name: string;
  isHorizontal?: boolean;
};

const LinkContainer = styled.li<{ $isActive: boolean }>`
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
const LinkText = styled.p<{ $isHorizontal: boolean }>`
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
const LinkAnchor = styled(Link)`
  text-decoration: none;
  vertical-align: middle;
  color: ${(props) => props.theme.color.OnPrimary};
`;
const StyledImage = styled(Image)`
  vertical-align: middle;
`;
export const NavLink = ({
  url,
  img,
  name,
  isHorizontal = true,
}: THeaderLink) => {
  const { isHover, changeHoverState } = useHover();
  const location = usePathname();
  return (
    <LinkContainer
      onMouseEnter={changeHoverState}
      onMouseLeave={changeHoverState}
      $isActive={location === url || isHover}
    >
      <LinkAnchor href={url}>
        <StyledImage src={img.image} alt={img.altName} />
        <LinkText $isHorizontal={isHorizontal}> {name}</LinkText>
      </LinkAnchor>
    </LinkContainer>
  );
};
