'use client';
import { styled } from 'styled-components';
import Image from 'next/image';
import DragDrop from '@assets/icons/common/DragDrop.svg';

const StyledDragIcon = styled(Image)`
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  cursor: pointer;
`;
export const ToDoDragTask = ({ taskId, handleDragging }: { taskId: string; handleDragging: (drag: boolean) => void }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', taskId);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  return (
    <StyledDragIcon src={DragDrop} alt={'DragDrop'} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
  );
};
