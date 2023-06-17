/*eslint-disable*/

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style/App.css';
import './style/Menu.css';
import Menu from './Menu';

function App() {
  let [cnt, setCnt] = useState<number>(0);
  let [data, setData] = useState([]);

  return (
    <div className="App">
      <h2 className='title'>철가방 Quiz</h2>
      <div className='box-container'>
        <Menu />

      </div>

      <Routes>
        <Route path='/a' element={<div>apple</div>} />
      </Routes>

      <img width={500} src='https://hyunkyu-song.github.io/GoodsShop/NewJeans/%ED%95%98%EB%8B%88.jpg'></img>
    </div>
  );
}

export default App;
