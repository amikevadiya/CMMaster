import React from 'react';
import slider_img from '../image/slider.png';
import slider_bg from '../image/slider_bg.png';

function Slider() {
  return (
    <section className='slider-section'>
      <div className='container-fuild'>
        <div className='row'>
          <div className='col-sm-12 col-lg-5 order-2 order-md-1'>
            <div className='add-class'></div>
          </div>
          <div className='col-sm-12 col-lg-7 order-1 order-md-2'>
            <div className='slider-text-container' style={{ backgroundImage: `url(${slider_bg})` }}>
              <div className='slider-text'>
                <h1> Welcome to Game Guild <br></br> <span>Your Online Gaming Haven</span></h1>
                <p>
                "Join Game Guild - Uniting Gamers, Forging Legends."


                </p>
                <p>Explore Countless Online Games <a  href='#' className='visit-now'>Visit Now</a></p>
              </div>
              {/* <img src={slider_img} className='img-fuild' alt='game-slider' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
