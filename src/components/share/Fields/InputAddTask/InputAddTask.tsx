'use client';
import { ChangeEvent, useContext, useState } from 'react';
import { InputForm } from '@components/core/Input/Input';
import { TasksContext } from '@context/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import { ToDoCategoriesNames } from '@data/todo';
import { Data } from '@utils/types';
import { Button } from '@components/core/Button/Button';

export const InputAddTask = () => {
  const [potentialTask, setPotentialTask] = useState('');
  const { createTask } = useContext(TasksContext);
  const handleCreateTask = () => {
    if (!potentialTask.trim().length) {
      return;
    }
    const newTask: Data = {
      id: uuidv4(),
      content: potentialTask.trim(),
      status: ToDoCategoriesNames.New,
    };
    createTask(newTask);
    setPotentialTask('');
  };

  return (
    <InputForm
      placeholder={'Add your new task'}
      inputValue={potentialTask}
      actionButtons={<Button text={'Add new task'} onClick={handleCreateTask} />}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPotentialTask(event.target.value)}
    />
  );
};
