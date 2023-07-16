import { toDoCategories } from '@data/todo';
import { CategoriesWrapper } from './ToDoContainer.elements';
import { ToDoList } from '../ToDoList/ToDoList';

export const ToDoContainer = () => {
  return (
    <CategoriesWrapper>
      {toDoCategories.map((category) => (
        <ToDoList status={category} key={category.name} />
      ))}
    </CategoriesWrapper>
  );
};
