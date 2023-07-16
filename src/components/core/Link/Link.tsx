import { LinkAnchor, LinkText, NavLinkWrapper, StyledImage, THNavLink } from './Link.elements';

export const NavLink = ({ url, img, name, isHorizontal = true, $primary }: THNavLink) => {
  return (
    <NavLinkWrapper url={url}>
      <LinkAnchor href={url}>
        <StyledImage src={img.image} alt={img.altName} />
        <LinkText $primary={$primary} $isHorizontal={isHorizontal}>
          {name}
        </LinkText>
      </LinkAnchor>
    </NavLinkWrapper>
  );
};
