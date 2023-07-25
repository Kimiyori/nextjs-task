import Header from '@/components/share/Header/HeaderMain';
import type { Metadata } from 'next';
import ThemeContext from '@/context/themeContext';
import { TimerProvider } from '@/context/TimerContext';
import { GlobalStyles } from './globaStyles';
import { TasksProvider } from '@/context/TasksContext';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>
          <GlobalStyles />
          <TimerProvider>
            <TasksProvider>
              <Header />
              {children}
            </TasksProvider>
          </TimerProvider>
        </ThemeContext>
      </body>
    </html>
  );
}
