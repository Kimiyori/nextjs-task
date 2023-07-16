import { useReducer, useState } from 'react';
import { Data } from '@utils/types';
import { Button } from '@components/core/Button/Button';
import { styled } from 'styled-components';
import { ToDoEditTask } from '../ToDoEditTask/ToDoEditTask';
import { DeleteButton } from '../../Fields/DeleteButton/DeleteButton';

const TaskWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
  &:hover {
    background: ${(props) => props.theme.color.Primary};
  }
`;
const TaskText = styled.p`
  padding: 0.5rem;
  flex-grow: 2;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
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
        <TaskWrapper draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <TaskText>{task}</TaskText>
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
        </TaskWrapper>
      )}
    </>
  );
};
