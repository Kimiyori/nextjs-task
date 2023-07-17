'use client';
import { useReducer, useState } from 'react';
import { Data } from '@utils/types';
import { Button } from '@components/core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditTask } from '../ToDoEditTask/ToDoEditTask';
import { DeleteButton } from '../../Fields/DeleteButton/DeleteButton';
import { TextArea } from '@/components/core/TextArea/TestArea';
import { ToDoDropdown } from './ToDoDropdown';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { devices } from '@/data/breakpoints';
import { ToDoDragTask } from './ToDoTaskDnD';
const TaskWrapper = styled.div`
  background: ${(props) => props.theme.color.Primary};
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;

export const ToDoTask = ({ data, handleDragging }: { data: Data; handleDragging: (drag: boolean) => void }) => {
  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);
  const isDesktop = useMediaQuery(devices.lg);

  return (
    <>
      {isEditing ? (
        <ToDoEditTask data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper>
          <TextArea text={task} disabled={true} />
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
          {isDesktop ? (
            <ToDoDragTask taskId={data.id} handleDragging={handleDragging} />
          ) : (
            <ToDoDropdown taskId={data.id} />
          )}
        </TaskWrapper>
      )}
    </>
  );
};
