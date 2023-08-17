import React from 'react';
import aboutus from '../image/about-us.png'

function About() {
  return (
   <section className='about-section'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-sm-12 col-lg-6'>
                    <div className='about-img'>
                        {/* <img src={aboutus} alt='about us'/> */}
                        <div className='about-img-us' style={{ backgroundImage: `url(${aboutus})` }}></div>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <div className='about-text-conatiner'>
                        <h3>What We Do</h3>
                        <h2>Simple Game Guide</h2>
                        <p>Simple Game Guide is fan base blog for game guide, news and information. Posts content includes how to guide, FAQs, game news, tips and more.Simple Game Guide is fan base blog for game guide, news and information. Posts content includes how to guide, FAQs, game news, tips and more.Simple Game Guide is fan base blog for game guide, news and information. Posts content includes how to guide, FAQs, game news, tips and more.</p>
                    </div>
                </div>
            </div>
        </div>
   </section>
  );
}

export default About;
