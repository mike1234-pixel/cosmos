import React from 'react';
import './index.scss';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from './store/index';
import { Provider } from 'react-redux'
const containerRoot = document.getElementById('root');
const root = createRoot(containerRoot);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
