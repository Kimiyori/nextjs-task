'use client';
import { useReducer, useState } from 'react';
import { Data } from '@utils/types';
import { Button } from '@components/core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditTask } from '../ToDoEditTask/ToDoEditTask';
import { DeleteButton } from '../../Fields/DeleteButton/DeleteButton';
import { TextArea } from '@/components/core/TextArea/TestArea';
import Image from 'next/image';
import DragDrop from '@assets/icons/common/DragDrop.svg';
const TaskWrapper = styled.div`
  background: ${(props) => props.theme.color.Primary};
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;
const StyledDragIcon = styled(Image)`
  border-left: 1px solid ${(props) => props.theme.color.Outline};
`;
export const ToDoTask = ({ data, handleDragging }: { data: Data; handleDragging: (drag: boolean) => void }) => {
  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', data.id);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  return (
    <>
      {isEditing ? (
        <ToDoEditTask data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper>
          <TextArea text={task} disabled={true} />
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
          <StyledDragIcon
            src={DragDrop}
            alt={'DragDrop'}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </TaskWrapper>
      )}
    </>
  );
};
