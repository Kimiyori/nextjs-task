import { sideNavData } from '@data/resume';
import { FC, Fragment } from 'react';
import { NavLink } from '@/components/core/Link/Link';
import { NavMenu, SideNavigationWrapper } from './SideNavigation.elements';

export const SideNavigation:FC = () => {
  return (
    <SideNavigationWrapper title={'Navigation'}>
      <hr />
      <NavMenu>
        {sideNavData.map((element, i) => (
          <Fragment key={i}>
            {i === 4 && <hr className="solid" />}
            <NavLink
              url={element.url}
              img={{
                image: element.img.image,
                altName: element.img.altName,
              }}
              name={element.name}
            />
          </Fragment>
        ))}
      </NavMenu>
    </SideNavigationWrapper>
  );
};
