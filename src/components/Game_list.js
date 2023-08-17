import React from 'react';
import { Link } from 'react-router-dom';
import gamelistdata from '../data/game_list.json';

function GameList() {
  return (
    <section>
      <div className='container'>
        <div className='heading'>
          <h2>Game List</h2>
        </div>
        <div className='row'>
          {gamelistdata.gamelist.map((item, index) => (
            <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
              {/* Check if item.id is valid before rendering the Link */}
              {item.id !== undefined ? (
                <Link to={`/game/${item.id}`} className='game-list-box'>
                  <div className='game-list-top'>
                    <img src={item.img} alt={`gamelist${index + 1}`} />
                  </div>
                  <div className='game-list-bootom'>
                    <h4>{item.text}</h4>
                    <div className='game-guid-short'>
                      <p>
                        Simple Game Guide is a fan base blog for game guide, news, and information.
                        Posts content includes how-to guide, FAQs, game news, tips, and more.
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <p>Error: Invalid item ID</p>
              )}
            </div>
          ))}
        </div>
        <div className='add-long'></div>
      </div>
    </section>
  );
}

export default GameList;
