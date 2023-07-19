import { bottomLeftHeader, bottomRightHeader } from '@/data/header';
import { HeaderMenu } from '@/components/core/Header/HeaderMenu';
import { HeaderBottomWrapper } from './HeaderBottom.elements';
import { FC } from 'react';

export const HeaderBottom: FC = () => {
  return (
    <HeaderBottomWrapper>
      <HeaderMenu $primary data={bottomLeftHeader} />
      <HeaderMenu $primary data={bottomRightHeader} />
    </HeaderBottomWrapper>
  );
};
