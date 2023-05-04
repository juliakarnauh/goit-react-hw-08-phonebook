import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <StyledEngineProvider injectFirst>
        <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </StyledEngineProvider>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
