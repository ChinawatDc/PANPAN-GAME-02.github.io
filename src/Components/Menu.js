import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.scss";
function Menu() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">PAN PAN GAME</h1>
        <div className="cards">
          <Link to="/game1">
            <div className="card blue">
              <p className="tip">Game 1</p>
              <p className="second-text">แพนๆ ผลไม้</p>
            </div>
          </Link>
          <Link to="/game2">
            <div className="card green">
              <p className="tip">Game 2</p>
              <p className="second-text">แพนๆ OX</p>
            </div>
          </Link>
          <Link to="/game3">
            <div class="card red">
              <p class="tip">Game 3</p>
              <p class="second-text">แพนๆ ลูกบอล</p>
            </div>
          </Link>
          <Link to="/game4">
            <div class="card yellow">
              <p class="tip">Game 4</p>
              <p class="second-text">แพนๆ รวมร่าง</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
