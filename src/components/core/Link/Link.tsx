import { LinkAnchor, LinkText, NavLinkWrapper, StyledImage, THNavLink } from './Link.elements';

export const NavLink = ({ url, img, name, isHorizontal = true }: THNavLink) => {
  return (
    <NavLinkWrapper url={url}>
      <LinkAnchor href={url}>
        <StyledImage src={img.image} alt={img.altName} />
        <LinkText $isHorizontal={isHorizontal}> {name}</LinkText>
      </LinkAnchor>
    </NavLinkWrapper>
  );
};
