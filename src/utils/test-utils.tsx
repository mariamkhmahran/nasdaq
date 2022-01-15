import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';
import { config } from '../overmind-state';
import Theme from 'assets/styles/Theme';

const overmind = createOvermind(config, { devtools: true });

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Provider value={overmind}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
