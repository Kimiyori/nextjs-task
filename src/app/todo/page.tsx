import { Board } from '@/components/core/Board/Board';
import { MainBackground } from '@/components/pageSpecific/todo.elements';
import { InputAddTask } from '@/components/share/Fields/InputAddTask/InputAddTask';
import { InputFilter } from '@/components/share/Fields/InputFilter/InputFilter';
import { ToDoContainer } from '@/components/share/ToDo/ToDoContainer/ToDoContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDO page',
};

export default function ToDo() {
  return (
    <>
      <MainBackground>
        <Board title={'To Do List'} />
        <div>
          <InputAddTask />
          <InputFilter />
        </div>
        <ToDoContainer />
      </MainBackground>
    </>
  );
}
