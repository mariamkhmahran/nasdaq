import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';
import { config } from './overmind-state';

import Theme from 'assets/styles/Theme';
import App from './App';

import './index.css';

const overmind = createOvermind(config, { devtools: true });

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
