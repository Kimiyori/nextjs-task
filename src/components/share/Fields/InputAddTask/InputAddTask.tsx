'use client';
import { ChangeEvent, useContext, useState } from 'react';
import { InputForm } from '@components/core/Input/Input';
import { TasksContext } from '@context/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import { ToDoCategoriesNames } from '@data/todo';
import { Data } from '@utils/types';
import { Button } from '@components/core/Button/Button';
import { Tooltip } from '@/components/core/Tooltip/Tooltip';
import { useError } from '@/hooks/useError';

export const InputAddTask = () => {
  const [potentialTask, setPotentialTask] = useState('');
  const { error, setError } = useError();
  const { createTask } = useContext(TasksContext);
  const clearTask = () => setPotentialTask('');
  const handleCreateTask = () => {
    if (!potentialTask.trim().length) {
      setError('Empty task is invalid');
    } else if (potentialTask.trim().length > 140) {
      setError('Task is too long');
    } else {
      const newTask: Data = {
        id: uuidv4(),
        content: potentialTask.trim(),
        status: ToDoCategoriesNames.New,
      };
      createTask(newTask);
    }
    clearTask();
  };

  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        placeholder={'Add your new task'}
        inputValue={potentialTask}
        actionButtons={<Button text={'Add new task'} onClick={handleCreateTask} />}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPotentialTask(event.target.value)}
      />
    </>
  );
};
