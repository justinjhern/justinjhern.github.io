import React from 'react'
import './Profile.css'
import profile_image from '../../assets/pufferfish.svg'
import Typewriter from "typewriter-effect";

const Profile = () => {

  return (
    <div className='profile'>
      <img src={profile_image} alt=""></img>
      <div className="profile-typewriter">
        <Typewriter
          onInit={(typerwriter) => {
            typerwriter
              .typeString("Hey!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("What's up?")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Hello! :)")
              .pauseFor(1000)
              .deleteChars(3)
              .pauseFor(1000)
              .changeDelay(100)
              .typeString(' I\'m <span style="background:linear-gradient(250deg, #03a9fc 0.50%, #3021ff 170%); background-clip: text; -webkit-background-clip: text;-webkit-text-fill-color: transparent;">Justin Jhern</span>, one of the software engineers of all time!')
              .start();
          }}
        /></div>
      <div className="profile-action">
        <div className="profile-contact"><a href={`mailto:justinjhern@gmail.com`}>Contact Me</a></div>
        <div className="profile-resume"><a href="https://docs.google.com/document/d/1oCL7XLKtlMuScuU-f6mAvseeDvKJWIJJ/edit?usp=sharing&ouid=101223440016812352932&rtpof=true&sd=true" target="_blank">View My Resume</a></div>
      </div>
    </div>
  )
}

export default Profile
