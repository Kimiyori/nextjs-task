import { addresses } from '@/data/resume';
import { AddressListWrapper } from './Address.elements';
import { Address } from './Address';
import { FC } from 'react';

export const AddressList:FC = () => {
  return (
    <AddressListWrapper>
      {addresses.map((address, index) => (
        <Address
          key={index}
          name={address.name}
          url={address.url}
          img={{
            image: address.img.src,
            altName: address.img.alt,
          }}
        />
      ))}
    </AddressListWrapper>
  );
};
