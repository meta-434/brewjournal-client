import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Components/Navigation/Navigation';
import Recipes from '../Components/Recipes/Recipes';
import Ratings from '../Components/Ratings';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';
import React from 'react';

export default function AppRouter() {
  return (
    <Router data-testid="router">
      <div>
        {/* All this Navigation component does is provide links that the Routes component can match & serve */}
        <Navigation />
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
  );
}
