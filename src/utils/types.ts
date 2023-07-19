import { FC, SVGProps } from 'react';

export type NavLinkProps = {
  url: string;
  img: {
    image: FC<React.PropsWithChildren<React.PropsWithChildren<SVGProps<SVGSVGElement> & { title?: string }>>>;
    altName: string;
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
