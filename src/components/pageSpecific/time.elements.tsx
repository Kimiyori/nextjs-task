'use client';
import Dropdown from '@/components/feature/Dropdown/DropdownWrapper';
import { TimerContext } from '@/context/TimerContext';
import { FC, useContext } from 'react';
import { styled } from 'styled-components';

const Time: FC = () => {
  const { totalTime, handleReset } = useContext(TimerContext);
  return (
    <Dropdown name={'Time'} reload={handleReset}>
      <TimeWrapper id="timer">
        <p>{totalTime}</p>
      </TimeWrapper>
    </Dropdown>
  );
};

const TimeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  #map {
    height: 100%;
    width: 100%;
  }
`;
export default Time;
