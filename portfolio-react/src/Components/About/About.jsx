import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className='about-top'>
        <div className="about-top-body">
          <li>I am an individual who values his privacy a lot (hence the pufferfish).</li>
          <li>I've interned at <span>Google</span> 3 times!</li>
          <li>I've also accepted an offer for a full time position at <span>Google</span>!</li>
        </div>
      </div>
      <div className='about-bottom'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
      </div>
    </div>
  )
}

export default About
