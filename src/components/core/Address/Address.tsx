import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
type TAddress = {
  name: string;
  url: string;
  img: { src: string; alt: string };
};
const AddressElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.OnSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Address: FC<TAddress> = ({ name, url, img }) => {
  return (
    <>
      <AddressElement>
        <a href={url}>
          <Image src={img.src} alt={img.alt} />
          <p >{name}</p>
        </a>
      </AddressElement>
    </>
  );
};
