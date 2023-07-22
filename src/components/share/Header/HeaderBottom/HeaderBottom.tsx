import { bottomLeftHeader, bottomRightHeader } from '@/data/header';
import HeaderMenu from '@/components/core/Header/HeaderMenu';
import HeaderBottomWrapper from '@components/share/Header/HeaderBottom/HeaderBottom.elements';
import { FC } from 'react';

const HeaderBottom: FC = () => {
  return (
    <HeaderBottomWrapper>
      <HeaderMenu $primary data={bottomLeftHeader} />
      <HeaderMenu $primary data={bottomRightHeader} />
    </HeaderBottomWrapper>
  );
};
export default HeaderBottom;
