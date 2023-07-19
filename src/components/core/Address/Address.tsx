import { FC } from 'react';
import { AddressElement } from './Address.elements';
import { NavLinkProps } from '@/utils/types';

export const Address: FC<NavLinkProps> = ({ name, url, img }) => {
  return (
    <AddressElement>
      <a href={url}>
        <img.image title={img.altName} />
        <p>{name}</p>
      </a>
    </AddressElement>
  );
};
