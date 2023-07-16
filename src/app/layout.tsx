import { Header } from '@/components/share/Header/HeaderMain';
import type { Metadata } from 'next';
import { ThemeContext } from '@/context/ThemeContext';
import { TimerProvider } from '@/context/TimerContext';
import { GlobalStyles } from './globaStyles';

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
            <Header />
            {children}
          </TimerProvider>
        </ThemeContext>
      </body>
    </html>
  );
}
