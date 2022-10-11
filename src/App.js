import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameState from "./context/game/GameState";
import LootManager from "./components/LootManager";

import "./App.css";
const App = () => {
 return (
  <GameState>
   <Router>
    <Routes>
     <Route exact path='/*' element={<LootManager />} />
    </Routes>
   </Router>
  </GameState>
 );
};

export default App;
