import { NavLinkProps } from '@/utils/types';
import NavLinkWrapper, { LinkAnchor, LinkText } from './Link.elements';
import { FC } from 'react';

type navLinkProps = NavLinkProps & { isHorizontal?: boolean; $primary?: boolean };

const NavLink: FC<navLinkProps> = ({ url, img, name, isHorizontal = true, $primary }) => {
  return (
    <NavLinkWrapper url={url}>
      <LinkAnchor $isHorizontal={isHorizontal} href={url}>
        <img.src title={img.alt} />
        <LinkText $primary={$primary} $isHorizontal={isHorizontal}>
          {name}
        </LinkText>
      </LinkAnchor>
    </NavLinkWrapper>
  );
};
export default NavLink;
