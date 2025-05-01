import React from 'react'
import './Hero.css'
import pic from '../../assets/pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pic} alt="" />
        <h1><span>I'm Gomathi sree,</span> Frontend developer.</h1>
        <p>I'm a self-driven Front-End Developer with a passion for coding and design. I enjoy building websites that blend creativity with functionality, delivering great user experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
