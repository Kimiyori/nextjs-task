'use client';
import { Dropdown } from '@/components/feature/Dropdown/DropdownWrapper';
import MapComponent from '@/components/feature/Map/Map';
import { useState } from 'react';
import styled from 'styled-components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Map page',
  description: 'Map page',
};
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

export default function Map() {
  const [seed, setSeed] = useState(Math.random());
  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <Dropdown name={'Yandex Map'} reload={reset}>
        <MenuWrapper key={seed}>
          <MapComponent />
        </MenuWrapper>
      </Dropdown>
    </>
  );
}
