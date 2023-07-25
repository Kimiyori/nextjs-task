import { FC } from 'react';
import DropdownWrapper, { DropdownProps } from '@components/feature/Dropdown/Dropdown.elements';

const Dropdown: FC<DropdownProps> = ({ name, reload, children }) => {
  return (
    <DropdownWrapper name={name} reload={reload}>
      {children}
    </DropdownWrapper>
  );
};
export default Dropdown;
