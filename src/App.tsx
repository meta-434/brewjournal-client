import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Ratings from "./Components/Ratings";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/recipes" element={<Recipes />} />

            <Route path="/ratings" element={<Ratings />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
