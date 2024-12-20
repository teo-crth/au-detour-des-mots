import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './styles/variables.css';
import { AppProvider } from './context/context';

const App = () => {
  return (
    <AppProvider> {/* Envelopper l'application avec AppProvider */}
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;