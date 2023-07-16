import { UpperHeader } from './HeaderUpper/HeaderUpper';
import { HeaderBottom } from './HeaderBottom/HeaderBottom';

export const Header = () => {
  return (
    <>
      <header>
        <UpperHeader />
        <HeaderBottom />
      </header>
    </>
  );
};
