import { FC } from 'react';
import { TooltipTip, TooltipWrapper } from './Tooltip.elements';

type TooltipProps = { content: string };

const Tooltip: FC<TooltipProps> = ({ content }) => {
  return (
    <TooltipWrapper>
      <TooltipTip>{content}</TooltipTip>
    </TooltipWrapper>
  );
};

export default Tooltip;
