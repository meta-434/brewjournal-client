import React from 'react';
import AppRouter from '../src/Router/AppRouter';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

function App() {
  return (
    <div data-testid="app-wrapper">
      <Auth0Provider
        data-testid="auth0-wrapper"
        domain={process.env.REACT_APP_DEV_AUTH0_DOMAIN || ''}
        clientId={process.env.REACT_APP_DEV_AUTH0_CLIENT_ID || ''}
        redirectUri={window.location.origin}
      >
        <AppRouter />
      </Auth0Provider>
    </div>
  );
}

export default App;
