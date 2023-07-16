import { addresses } from '@/data/resume';
import { AddressListWrapper } from './Address.elements';
import { Address } from './Address';

export const AddressList = () => {
  return (
    <AddressListWrapper>
      {addresses.map((address, index) => (
        <Address
          key={index}
          name={address.name}
          url={address.url}
          img={{
            src: address.img.src,
            alt: address.img.alt,
          }}
        />
      ))}
    </AddressListWrapper>
  );
};
1;
