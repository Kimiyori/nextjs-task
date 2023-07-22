import { sideNavData } from '@data/resume';
import { FC, Fragment } from 'react';
import NavLink from '@/components/core/Link/Link';
import SideNavigationWrapper, { NavMenu } from './SideNavigation.elements';

const SideNavigation: FC = () => {
  return (
    <SideNavigationWrapper title={'Navigation'}>
      <hr />
      <NavMenu>
        {sideNavData.map((element, i) => (
          <Fragment key={element.name}>
            {i === 4 && <hr className="solid" />}
            <NavLink {...element} />
          </Fragment>
        ))}
      </NavMenu>
    </SideNavigationWrapper>
  );
};
export default SideNavigation;
