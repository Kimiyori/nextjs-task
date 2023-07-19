import { NavLinkProps } from '@/utils/types';
import { LinkAnchor, LinkText, NavLinkWrapper } from './Link.elements';
import { FC } from 'react';

export const NavLink: FC<NavLinkProps & { isHorizontal?: boolean; $primary?: boolean }> = ({
  url,
  img,
  name,
  isHorizontal = true,
  $primary,
}) => {
  return (
    <NavLinkWrapper url={url}>
      <LinkAnchor $isHorizontal={isHorizontal} href={url}>
        <img.image title={img.altName} />
        <LinkText $primary={$primary} $isHorizontal={isHorizontal}>
          {name}
        </LinkText>
      </LinkAnchor>
    </NavLinkWrapper>
  );
};
