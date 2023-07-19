import { toDoCategories } from '@data/todo';
import { CategoriesWrapper } from './ToDoContainer.elements';
import { ToDoList } from '../ToDoList/ToDoList';
import { FC } from 'react';

export const ToDoContainer: FC = () => {
  return (
    <CategoriesWrapper>
      {toDoCategories.map((category) => (
        <ToDoList status={category} key={category.name} />
      ))}
    </CategoriesWrapper>
  );
};
