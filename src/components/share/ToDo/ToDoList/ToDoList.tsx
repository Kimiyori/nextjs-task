'use client';
import { DragEvent, useContext } from 'react';
import { TasksContext } from '@context/TasksContext';
import { TtoDoCategories } from '@utils/types';
import { ToDoListContainer } from './ToDoList.elements';
import { useDragAndDrop } from '@hooks/useDragAndDrop';
import { ToDoTask } from '../ToDoTask/ToDoTask';

export const ToDoList = ({ status }: { status: TtoDoCategories }) => {
  const { todosFiltered, updateTask } = useContext(TasksContext);
  const { handleDragging } = useDragAndDrop();
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    updateTask(id, { status: status.name });
    handleDragging(false);
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <ToDoListContainer $bgColor={status.bgColor} onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>{status.name}</h3>
        {todosFiltered.map(
          (item) =>
            status.name === item.status && <ToDoTask data={item} key={item.id} handleDragging={handleDragging} />,
        )}

    </ToDoListContainer>
  );
};
