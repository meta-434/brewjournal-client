import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes/Recipes';
import Ratings from './Components/Ratings';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DEV_AUTH0_DOMAIN || ''}
      clientId={process.env.REACT_APP_DEV_AUTH0_CLIENT_ID || ''}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Router>
          <div>
            {/* All this Navbar component does is provide links that the Routes component can match & serve */}
            <Navbar />
            {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/my-recipes" element={<Recipes />} />
              <Route path="/all-recipes" element={<Recipes />} />

              <Route path="/ratings" element={<Ratings />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
