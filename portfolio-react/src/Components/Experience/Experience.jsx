import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Google, Inc.',
      date: 'May 2023 - Aug 2023',
      jobTitle: 'Software Engineering Intern',
      location: 'Mountain View, CA',
      description: [
        'Prototyped a tool in C++ used by the AdSpam Infra team allowing ad-hoc undoing of spam decisions and recovery from overfiltration, saving engineers approximately a week’s worth of time per instance of overfiltration.',
        'Created a data pipeline to query events from a database and undo spam filtration logic to recover events from overfiltration.',
        'Wrote unit tests to verify current and future integrity of the tool.',
        'Performed load and scale testing on production data, processing around 380 billion events in approximately 1 hour and 30 minutes'
      ]
    },
    {
      company: 'Google, Inc.',
      date: 'May 2022 - Aug 2022',
      jobTitle: 'STEP Intern',
      location: 'Mountain View, CA',
      description: [
        'Designed and implemented a C++ library used by the Google Analytics Reprocessing team to detect and alert engineers of problematic events, saving approximately 2 hours per week, per engineer.',
        'Coded unit tests based on mock production data to verify the integrity of current and future modifications made to the library as well as authenticating successful integration with the existing reprocessing framework.',
        'Wrote an extensive 28-page design document thoroughly detailing design options, design breakdowns, as well as test planning.',
      ]
    },
    {
      company: 'Google, Inc.',
      date: 'May 2021 - Aug 2021',
      jobTitle: 'STEP Intern',
      location: 'Mountain View, CA',
      description: [
        'Created a statistics-based heuristic in C++ for the automatic removal of irrelevant keywords from an AWX smart campaign.',
        'Tested the efficacy of designed heuristics against manual human review on mock live data.',
        'Wrote a design document detailing the processes and considerations involved with the creation, implementation, and testing of the heuristic.',
      ]
    }
  ];

  return (
    <div id='experience' className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <p>Here is some of my past work.</p>
      </div>
      <div className='experience-content'>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="header">
              <span className="company">{exp.company}</span>
              <span className="date">{exp.date}</span>
            </div>
            <div className="sub-header">
              <span className="job-title">{exp.jobTitle}</span>
              <span className="location">{exp.location}</span>
            </div>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
