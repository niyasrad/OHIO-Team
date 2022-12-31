import React from "react";
import './AboutPage.css';
import aboutohio from '../../assets/aboutohio.png';

function AboutPage() {
    return (
      <>
        <div className='about-screen'>
          <h1>About</h1>
          <p>A word from our founder.</p>
          <img src={aboutohio} />
          <div className="about-12">
            <div className="about-1">
              <p>There’s not really a theme, it’s all happening in Ohio apparently. Sometimes your milk is frozen and that probably has happened in every state.Originally, we thought these were ducks but upon closer look, it may just be a rare bread that only exists in Ohio. Nevertheless, animals getting in the way of your commute definitely isn’t isolated to Ohio…but maybe these birds are.It seems that the state being a meme isn’t a new thing. The meme actually started in 2016 on Tumblr of all places and all stemmed from one post. The post was off a screen at a bus stop that read ‘Ohio will be eliminated,’ and it got the ball rolling.</p>
              
            </div>
            <div className="about-2">
            <p>Quite a few of the videos are to the same song as well, Down in Ohio. This one supposes that buildings and people in the state aren’t even real, and can be pushed with your finger. So, if you go to Ohio, prepare for physics to work differently to what you’re used to.However, some are just plain ridiculous. We can confirm that cameras attached to your doorbells are allowed in the state. We also think it’s safe to say that you’ll probably never see a tank through the feed either.</p>
            </div>
          </div>
          <p>Founded By Raddoman. @2022 All rights not reserved.</p>
          
        </div>
      </>
    );
  }
  
  export default AboutPage;
  