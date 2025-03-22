import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonProfile from "./components/PokemonProfile";
import HeaderNavi from "./components/HeaderNavi";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNavi />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
