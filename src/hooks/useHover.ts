import { useReducer } from 'react';

export const useHover = () => {
  const [isHover, changeHoverState] = useReducer((isHover) => !isHover, false);
  return { isHover, changeHoverState };
};
