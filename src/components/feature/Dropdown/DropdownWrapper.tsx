import { ReactNode } from 'react';
import { DropdownWrapper } from './Dropdown.elements';

export const Dropdown = ({ name, reload, children }: { name: string; reload: () => void; children?: ReactNode }) => {
  return (
    <DropdownWrapper name={name} reload={reload}>
      {children}
    </DropdownWrapper>
  );
};
