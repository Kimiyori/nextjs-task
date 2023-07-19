import { FC } from 'react';
import { DropdownProps, DropdownWrapper } from './Dropdown.elements';

export const Dropdown: FC<DropdownProps> = ({ name, reload, children }) => {
  return (
    <DropdownWrapper name={name} reload={reload}>
      {children}
    </DropdownWrapper>
  );
};
