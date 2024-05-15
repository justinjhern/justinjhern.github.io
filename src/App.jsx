import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import MyProjects from './Components/MyProjects/MyProjects'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Profile/>
        <About/>
        <MyProjects/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default App
