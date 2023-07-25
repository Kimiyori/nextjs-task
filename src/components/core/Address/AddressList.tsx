import { addresses } from '@/data/resume';
import { AddressListWrapper } from '@components/core/Address/Address.elements';
import Address from '@components/core/Address/Address';
import { FC } from 'react';

const AddressList: FC = () => {
  return (
    <AddressListWrapper>
      {addresses.map((address) => (
        <Address key={address.name} {...address} />
      ))}
    </AddressListWrapper>
  );
};
export default AddressList;
