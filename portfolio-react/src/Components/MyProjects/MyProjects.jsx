import React from 'react'
import './MyProjects.css'

const MyProjects = () => {

  return (
    <div id='projects' className='myprojects'>
      <div className="myprojects-title">
        <h1>Projects</h1>
        <p> I don't have many projects since they are all company internal but here are a few!</p>
      </div>
      <div className="myprojects-content">
          <h3><a href="https://github.com/justinjhern/sdfss">Simple Distributed File Storage System</a></h3>
          <p> Simple Distributed File Storage System (SDFSS) is a prototype of a distributed file storage system.</p>
          <p><small>C++, CPPZMQ, JSON</small></p>
          <h3><a href="https://github.com/justinjhern/TamagoBot">Tamago Bot</a></h3>
          <p> TamagoBot was a bot created for 5v5 custom League of Legend games with a self balancing algorithm.</p>
          <p><small>Java, JDA, Gradle</small></p>
      </div>
    </div> 
  )
}

export default MyProjects
