import UpperHeader from './HeaderUpper/HeaderUpper';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <UpperHeader />
      <HeaderBottom />
    </header>
  );
};
export default Header;
