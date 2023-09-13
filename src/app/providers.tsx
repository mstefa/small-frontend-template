'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { ItemsContextProvider } from '../modules/items/context/ItemsContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    // TODO: delete or use theme
    <ThemeProvider>
      <ItemsContextProvider>{children}</ItemsContextProvider>;
    </ThemeProvider>
  );
}
