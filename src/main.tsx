import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React                         from 'react';
import ReactDOM                      from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate }               from 'redux-persist/integration/react';
import { persistor, store }          from '@store/index';
import { App }                       from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
);
