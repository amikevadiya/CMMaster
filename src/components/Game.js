import React from 'react';
import online_bg from '../image/online_game.png';
function Game() {
  return (
    <section>
        <div className='container'>
            <div className='game-online-container' style={{ backgroundImage: `url(${online_bg})` }}>
                <h2>Try our new game now!</h2>
                <a href='#' className='online-game-text'>JUMBLE WORD</a>
            </div>
        </div>
    </section>
  );
}

export default Game;
