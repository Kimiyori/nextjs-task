import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';
import { Data } from '@utils/types';
import { TasksContext } from '@context/TasksContext';
import { InputForm } from '@components/core/Input/Input';
import { Button } from '@components/core/Button/Button';

type TToDoEditItem = {
  data: Data;
  toggleFrom: () => void;
  currentTask: string;
  setCurrentTask: Dispatch<SetStateAction<string>>;
};

export const ToDoEditTask = ({ data, toggleFrom, currentTask, setCurrentTask }: TToDoEditItem) => {
  const { removeTask, updateTask } = useContext(TasksContext);
  const handleCancel = () => {
    setCurrentTask(data.content);
    toggleFrom();
  };
  const handleUpdate = () => {
    currentTask.trim() ? updateTask(data.id, { content: currentTask.trim() }) : removeTask(data.id);
    toggleFrom();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTask(event.target.value);
  };

  return (
    <>
      <InputForm
        inputValue={currentTask}
        actionButtons={
          <>
            <Button text={'Save'} onClick={handleUpdate} />
            <Button text={'Cancel'} onClick={handleCancel} />
          </>
        }
        onChange={handleChange}
      />
    </>
  );
};
