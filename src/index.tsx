import React from 'react';
import ReactDOM from 'react-dom';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind-state';
import App from './App';

import './index.css';

const overmind = createOvermind(config, { devtools: true });

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
