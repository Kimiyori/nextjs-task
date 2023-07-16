import { FC } from 'react';
import Image from 'next/image';
import { AddressElement } from './Address.elements';

type TAddress = {
  name: string;
  url: string;
  img: { src: string; alt: string };
};

export const Address: FC<TAddress> = ({ name, url, img }) => {
  return (
    <>
      <AddressElement>
        <a href={url}>
          <Image src={img.src} alt={img.alt} />
          <p>{name}</p>
        </a>
      </AddressElement>
    </>
  );
};
