import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gamelistdata from '../data/game_list.json';
import coinimg from '../image/coin_spin.png';

function GameDetail() {
  const { gameId } = useParams();
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dailycoinspin.com/admin/cmmaster-api/fetch.php?password=dk@1133');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setRewards(jsonData.rewards);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (gameId === undefined) {
    return <div>Error: Game ID is missing.</div>;
  }

  const gameItem = gamelistdata.gamelist.find(item => item.id === parseInt(gameId));

  if (!gameItem) {
    return <div>Error: Game not found.</div>;
  }

  return (
    <div>
      <section className='game-list-detail-section'>
        <div className='container game-list-detail-container'>
          <div className='row'>
            <div className='col-4'>
              <h1>{gameItem.text}</h1>
              <a href='#' className='btn-web'>Play game</a>
            </div>
            <div className='col-8'>
              <div className='page-slide-img'>
                <img src={gameItem.deatilimg} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='page-detail'>
            <p>Here in this post, Free spins and coins links are daily updated with new rewards like coin master 70 spins link, free spins promo code, 400 spin link and spin link download bonuses which are officially released by Coin Master on their social media accounts like Facebook, Twitter, YouTube and Instagram.</p>
          </div>
          <div className='row'>
            {rewards.map((reward) => (
              <div className='col-3' key={reward.id}>
                <div className='coin-img'>
                  <span className='spin-date'>{reward.date}</span>
                  <img src={coinimg} alt='' />
                  <div className='coin-free-spin'>
                    <span>{reward.title}</span>
                  </div>
                  <a href='#' className='collect-btn'>Collect</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GameDetail;
