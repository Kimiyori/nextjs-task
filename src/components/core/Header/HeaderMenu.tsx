import { bottomLeftHeader } from '@data/header';
import NavLink from '@/components/core/Link/Link';
import { Menu } from '@components/core/Header/headerMenu.elements';
import { FC } from 'react';

type HeaderMenuProps = {
  data: typeof bottomLeftHeader;
  isHorizontal?: boolean;
  $primary?: boolean;
};
const HeaderMenu: FC<HeaderMenuProps> = ({ data, isHorizontal = true, $primary = false }) => {
  return (
    <Menu $isHorizontal={isHorizontal}>
      {data.map((element) => (
        <NavLink key={element.name} isHorizontal={isHorizontal} $primary={$primary} {...element} />
      ))}
    </Menu>
  );
};
export default HeaderMenu;
