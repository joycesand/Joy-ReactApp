import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Get to Know Atim Joyce Sandra!</h1>
      <p>I am a Software Developer and Currently helping out with coaching Code Queen Ladies cohort3 at
ETC. I have been working with a team of (4) on customizing a software for the Land rights System in
Uganda (Trustful trade) USSD application, Website, Mobile and Web apps. Figma and Whimsical
Design, Slack and Trello board Work flow. Am Ready to learn new technologies. </p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
