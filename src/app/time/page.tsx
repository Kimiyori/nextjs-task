'use client';
import { Dropdown } from '@/components/feature/Dropdown/DropdownWrapper';
import { TimerContext } from '@/context/TimerContext';
import { useContext } from 'react';
import styled from 'styled-components';

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

const Time = () => {
  const { totalTime, handleReset } = useContext(TimerContext);
  return (
    <>
      <Dropdown name={'Time'} reload={handleReset}>
        <TimeWrapper id="timer">
          <p>{totalTime}</p>
        </TimeWrapper>
      </Dropdown>
    </>
  );
};
export default Time;
