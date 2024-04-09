import logo from "./logo.svg";
import PokemonCard from "./PokemonCard/PokemonCard";
import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/pokadex">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
