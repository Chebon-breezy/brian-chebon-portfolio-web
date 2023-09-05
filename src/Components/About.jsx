import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
      Highly motivated and skilled Software Developer with a strong background in JavaScript, TypeScript, and React. I have a deep passion for web development and a strong desire to gain practical experience in software development. I am enthusiastic about contributing to projects and utilizing my technical skills to reach project milestones. I am actively seeking opportunities that foster learning, growth, and collaboration in a fast-paced, agile development environment. I have a proven track record of expertise in creating and maintaining APIs and web services and a solid understanding of the software development lifecycle.
      As a proactive problem-solver, I excel at quickly learning new technologies and troubleshooting with minimal guidance. I also pride myself on my excellent communication skills and have a demonstrated ability to build strong relationships with clients and teams. My commitment to delivering optimized and high-performing solutions is unwavering.
      </div>
    </div>
  )
}
export default About;
