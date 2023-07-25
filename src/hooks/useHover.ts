import { useReducer } from 'react';
const useHover = () => {
  const [isHover, changeHoverState] = useReducer((isHover) => !isHover, false);
  return { isHover, changeHoverState };
};
export default useHover;
