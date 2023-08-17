import React from 'react';
import artical from '../image/artical-1.png'

function Artical() {
  return (
    <section>
      <div className='container'>
        <div className='heading'>
          <h2>Latest Articles</h2>
        </div>            
        <div className='col-12'>
        <div className='artical-container'>
            <div className='artical-img'>
                <img src={artical} alt='artical-1'/>
            </div>
            <div className='artical-text'>
                <h3>Today’s Free Spins & Coins (Daily Coin Master Rewards 2023)</h3>
                <p>With a player base of millions, this is a game that doesn't shy away from giving free rewards! With each passing day, players can claim a bunch of Coin Master free spins and coins from the game's Facebook, and let's be honest - who doesn't want some? Every single day there is a new freebie that is going to help you advance and get more rewards.</p>
                <a href='#' className='btn-web'>View More</a>
            </div>
        </div>

        </div>
        {/* <div className='add-long'>        
        </div> */}
      </div>
    </section>
  );
}

export default Artical;
