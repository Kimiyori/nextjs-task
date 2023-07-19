import { UpperHeader } from './HeaderUpper/HeaderUpper';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header>
      <UpperHeader />
      <HeaderBottom />
    </header>
  );
};
