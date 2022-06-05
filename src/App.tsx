import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Users from "./Components/Users";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Navbar />
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route
                        path="/Recipes"
                        element={
                            <Recipes />
                        }
                    />

                    <Route
                        path="/Users"
                        element={
                            <Users />
                        }
                    />

                    <Route
                        path="/"
                        element={
                            <Home />
                        }
                    />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
