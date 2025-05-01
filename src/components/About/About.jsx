import React from 'react'
import './About.css'
import theme from '../../assets/theme.png'
import pic from '../../assets/pic.png'


const About = () => {
  return (
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a passionate Front-End Developer with a strong focus on building user-friendly, responsive, and visually appealing web applications. I love turning ideas into real-life products that people enjoy using. Skilled in modern web technologies like HTML, CSS, JavaScript, React.js and API integration, I’m always learning and staying up-to-date with new trends in web development.</p>
         
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p></div>
            <div className="about-skill"><p>JavaScript</p></div>
            <div className="about-skill"><p>React JS</p></div>
            <div className="about-skill"><p>Next JS</p></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>3+</h1>
          <p>FORAGE INTERNSHIP PROJECTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
