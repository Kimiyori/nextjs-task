import { upperHeader } from '@data/header';
import Back from '@assets/icons/header/Back.svg';
import HeaderMenu from '@/components/core/Header/HeaderMenu';
import UpperHeaderRight, { LeftElement, UpperHeaderSection } from './HeaderUpper.elements';
import Sidebar from '@components/share/SideBar/Sidebar';
import { FC } from 'react';

const UpperHeader: FC = () => {
  return (
    <UpperHeaderSection>
      <LeftElement>
        <Back title="Back" />
        <span>User pages - Profile</span>
      </LeftElement>
      <UpperHeaderRight sidebar={<Sidebar />}>
        <HeaderMenu data={upperHeader} isHorizontal={false} />
      </UpperHeaderRight>
    </UpperHeaderSection>
  );
};
export default UpperHeader;
