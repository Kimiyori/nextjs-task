import { FC, SVGProps } from 'react';

export type NavLinkProps = {
  url: string;
  img: {
    src: FC<React.PropsWithChildren<React.PropsWithChildren<SVGProps<SVGSVGElement> & { title?: string }>>>;
    alt: string;
  };
  name: string;
};
export type TtoDoCategories = {
  name: string;
  bgColor: string;
};

export type Data = {
  id: string;
  content: string;
  status: string;
};
