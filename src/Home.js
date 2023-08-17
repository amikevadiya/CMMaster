import React from 'react';
import Slider from './components/Slider';
import GameList from './components/Game_list';
import Artical from './components/Artical';
import About from './components/About';
import Game from './components/Game';

function Home() {
  return (
    <div className='homepage'>
      <Slider/>
      <GameList/>
      <Artical/>
      <About/>
      <Game/>
    </div>
  );
}

export default Home;
