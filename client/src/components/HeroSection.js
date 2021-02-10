import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid1 from '../media/videos/vid2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay playsInline loop muted src={vid1} type='video/mp4' />
      <h1>CALVIRI</h1>
      <p>Internal Data Management System</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          REGISTER
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
          CHOOSE YOUR LAB
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
