import { TooltipTip, TooltipWrapper } from './Tooltip.elements';

export const Tooltip = ({ content }: { content: string }) => {
  return (
    <TooltipWrapper>
      <TooltipTip>{content}</TooltipTip>
    </TooltipWrapper>
  );
};
