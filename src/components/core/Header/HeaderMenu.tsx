import { bottomLeftHeader } from '@data/header';
import { NavLink } from '@/components/core/Link/Link';
import { Menu } from './headerMenu.elements';

export const HeaderMenu = ({
  data,
  isHorizontal = true,
  $primary = false,
}: {
  data: typeof bottomLeftHeader;
  isHorizontal?: boolean;
  $primary?: boolean;
}) => {
  return (
    <Menu $isHorizontal={isHorizontal}>
      {data.map((element) => (
        <NavLink
          key={element.name}
          url={element.url}
          img={{ image: element.img.image, altName: element.img.altName }}
          name={element.name}
          isHorizontal={isHorizontal}
          $primary={$primary}
        />
      ))}
    </Menu>
  );
};
