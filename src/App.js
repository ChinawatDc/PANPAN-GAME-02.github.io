import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Menu from './Components/Menu';
import Game1 from './Game/Game';
import Game2 from './Game/Game2';
import Game3 from './Game/Game3';
import ModalContainer from './Components/ModalContainer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
       
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/game1" element={<Game1 />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/game3" element={<Game3 />} />
          </Routes>
        </div>
      </div>
      <ModalContainer />
    </Router>
  );
}

export default App;
