import { upperHeader } from '@data/header';
import Back from '@assets/icons/header/Back.svg';
import Image from 'next/image';
import { HeaderMenu } from '@/components/core/Header/HeaderMenu';
import { LeftElement, UpperHeaderRight, UpperHeaderSection } from './HeaderUpper.elements';

export const UpperHeader = () => {
  return (
    <>
      <UpperHeaderSection>
        <LeftElement>
          <Image src={Back} alt="Back" />
          <span>User pages - Profile</span>
        </LeftElement>
        <UpperHeaderRight>
          <HeaderMenu data={upperHeader} isHorizontal={false} />
        </UpperHeaderRight>
      </UpperHeaderSection>
    </>
  );
};
