import { FC } from 'react';
import { AddressElement } from '@components/core/Address/Address.elements';
import { NavLinkProps } from '@/utils/types';

const Address: FC<NavLinkProps> = ({ name, url, img }) => {
  return (
    <AddressElement>
      <a href={url}>
        <img.src title={img.alt} />
        <p>{name}</p>
      </a>
    </AddressElement>
  );
};
export default Address;
