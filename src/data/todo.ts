import { TtoDoCategories } from '@utils/types';
export const ToDoCategoriesNames = {
  New: 'New tasks',
  InProcess: 'In Process',
  Completed: 'Completed',
};

export const toDoCategories: TtoDoCategories[] = [
  {
    name: ToDoCategoriesNames.New,
    bgColor: '32, 226, 62',
  },
  {
    name: ToDoCategoriesNames.InProcess,
    bgColor: '242, 193, 12',
  },
  {
    name: ToDoCategoriesNames.Completed,
    bgColor: '226, 32, 32',
  },
];
