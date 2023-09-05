import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Food Recipe App',
      desc: 'This web application is designed to simplify your culinary adventures by providing a vast array of recipes at your fingertips. Leveraging the power of React for the frontend and connecting to an API for real-time ingredient information, this app enhances your cooking journey.',
      liveLink: 'https://recipe-app-chebon.vercel.app',
      githubLink: 'https://github.com/Chebon-breezy/RecipeApp',
      techs: ['HTML', 'CSS', 'React', 'Recipe API', 'JavaScript'],
      isOpenSource: true
    },
    two: {
      name: 'Event App',
      desc: 'This web application serves as a hub for events from various cities, allowing users to explore, discover, and book their favorite events. Built using JavaScript, Next.js, HTML, and CSS, this app provides a seamless event browsing experience.',
      liveLink: 'https://event-app-chebon.vercel.app',
      githubLink: 'https://github.com/Chebon-breezy/Event-App',
      techs: ['JavaScript', 'Next.js', 'HTML' , 'CSS'],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
      </div>
    </div>
  )
}

export default Projects;
