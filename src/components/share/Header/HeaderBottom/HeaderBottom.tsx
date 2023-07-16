import { bottomLeftHeader, bottomRightHeader } from '@/data/header';
import { HeaderMenu } from '@/components/core/Header/HeaderMenu';
import { HeaderBottomWrapper } from './HeaderBottom.elements';

export const HeaderBottom = () => {
  return (
    <>
      <HeaderBottomWrapper>
        <HeaderMenu $primary data={bottomLeftHeader} />
        <HeaderMenu $primary data={bottomRightHeader} />
      </HeaderBottomWrapper>
    </>
  );
};
