'use client';
import { styled } from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
`;
export const TooltipTip = styled.div`
  position: absolute;
  left: 50%;
  top: -40px;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.theme.color.OnError};
  background: ${(props) => props.theme.color.Error};
  z-index: 100;
`;
