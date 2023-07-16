import type { Metadata } from 'next';
import { TasksProvider } from '@/context/TasksContext';

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo',
};

export default function ToDoLayout({ children }: { children: React.ReactNode }) {
  return <TasksProvider>{children}</TasksProvider>;
}
