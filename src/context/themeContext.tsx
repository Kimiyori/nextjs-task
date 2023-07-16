'use client';

import StyledComponentsRegistry from '@/app/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@data/styleVariables';
export const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
