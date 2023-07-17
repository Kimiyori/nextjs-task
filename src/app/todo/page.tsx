import { Board } from '@/components/core/Board/Board';
import { InputAddTask } from '@/components/share/Fields/InputAddTask/InputAddTask';
import { InputFilter } from '@/components/share/Fields/InputFilter/InputFilter';
import { MainBody } from '@/components/share/MainBody/MainBody';
import { ToDoContainer } from '@/components/share/ToDo/ToDoContainer/ToDoContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDO page',
};

export default function ToDo() {
  return (
    <>
      <MainBody $vertical={true}>
        <Board title={'To Do List'} />
        <div>
          <InputAddTask />
          <InputFilter />
        </div>
        <ToDoContainer />
      </MainBody>
    </>
  );
}
