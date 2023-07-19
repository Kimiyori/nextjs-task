'use client';
import { PropsWithChildren, createContext } from 'react';
import { useTimer } from '@hooks/useTimer';

export type TypeTimerProps = {
  totalTime: string;
  handleReset: () => void;
};
export const TimerContext = createContext<TypeTimerProps>({
  totalTime: '0',
  handleReset: () => undefined,
});
export const TimerProvider = ({ children }: PropsWithChildren) => {
  const { totalTime, handleReset } = useTimer();
  return <TimerContext.Provider value={{ totalTime, handleReset }}>{children}</TimerContext.Provider>;
};
