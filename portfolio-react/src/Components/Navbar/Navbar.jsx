import React, { useState } from 'react'
import './Navbar.css'
import catton from '../../assets/catton.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Selected menu item state

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem); // Update state on click
  };

  return (
    <div className='navbar'>
      <img src={catton} alt="" />
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'>
          <p onClick={() => handleMenuItemClick("home")} className={menu === "home" ? "active" : ""}>Home</p>
        </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>
          <p onClick={() => handleMenuItemClick("about")} className={menu === "about" ? "active" : ""}>About Me</p>
        </AnchorLink> </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'>
          <p onClick={() => handleMenuItemClick("projects")} className={menu === "projects" ? "active" : ""}>Projects</p>
        </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#experience'>
          <p onClick={() => handleMenuItemClick("experience")} className={menu === "experience" ? "active" : ""}>Experience</p>
        </AnchorLink></li>
      </ul>
      <div className="nav-connect"><a href={`mailto:justinjhern@gmail.com`}>Contact Me</a></div>
    </div>
  )
}

export default Navbar