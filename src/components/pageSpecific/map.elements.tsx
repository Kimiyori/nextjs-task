'use client';
import { Dropdown } from '@/components/feature/Dropdown/DropdownWrapper';
import MapComponent from '@/components/feature/Map/Map';
import { FC, useState } from 'react';
import { styled } from 'styled-components';

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  #map {
    height: 100%;
    width: 100%;
  }
`;

export const MapPage: FC = () => {
  const [seed, setSeed] = useState(Math.random());
  const reset = () => {
    setSeed(Math.random());
  };
  return (

      <Dropdown name={'Yandex Map'} reload={reset}>
        <MenuWrapper key={seed}>
          <MapComponent />
        </MenuWrapper>
      </Dropdown>

  );
};
