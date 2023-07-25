'use client';
import { FC } from 'react';
import { styled } from 'styled-components';

type ToDoDragTaskProps = {
  taskId: string;
  handleDragging: (drag: boolean) => void;
};
const ToDoDragTask: FC<ToDoDragTaskProps> = ({ taskId, handleDragging }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', taskId);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  return (
    <StyledDragText draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      Drag
    </StyledDragText>
  );
};
const StyledDragText = styled.p`
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0;
  cursor: pointer;
  color: ${(props) => props.theme.color.OnPrimary};
  font-size: ${(props) => props.theme.font.size.normal};
  padding: 0.5rem;
  padding-bottom: 12px;
  &:hover {
    background-color: ${(props) => props.theme.color.Surface};
  }
`;
export default ToDoDragTask;
