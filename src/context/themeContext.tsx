'use client';
import StyledComponentsRegistry from '@/app/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@data/styleVariables';
import { PropsWithChildren } from 'react';
const ThemeContext = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
export default ThemeContext;
