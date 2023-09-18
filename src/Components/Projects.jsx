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
      name: 'RestHotel',
      desc: 'RestHotel is a Next.js and TypeScript web application designed for hotels, created with HTML and Tailwind CSS. It offers a seamless guest experience with user-friendly menus, Chefs Specials, a contact form, and easy booking options. Guests can access hotel information, make inquiries, and explore the menu with ease.',
      liveLink: 'https://resthotel-next-js-ts-main.vercel.app/',
      githubLink: 'https://github.com/Chebon-breezy/resthotel-nextjs-ts-main',
      techs: ['TypeScript', 'Tailwind CSS', 'HTML' , 'CSS', 'Next JS '],
      isOpenSource: true
    },

    three: {
      name: 'Event App',
      desc: 'This web application serves as a hub for events from various cities, allowing users to explore, discover, and book their favorite events. Built using JavaScript, Next.js, HTML, and CSS, this app provides a seamless event browsing experience.',
      liveLink: 'https://event-app-chebon.vercel.app',
      githubLink: 'https://github.com/Chebon-breezy/Event-App',
      techs: ['JavaScript', 'Next.js', 'HTML' , 'CSS'],
      isOpenSource: true
    },
    four: {
      name: 'Landing Page',
      desc: 'Landing Page – a visually captivating, one-page masterpiece that combines JavaScript, HTML, and CSS to create an engaging user experience. Tailwind CSS adds a touch of style and modernity to the design, while Masonry Grid and Fancybox CSS enhance image presentation and interactivity.',
      liveLink: 'https://adrespect-page-bon.netlify.app',
      githubLink: 'https://github.com/Chebon-breezy/adrespect-page',
      techs: ['JavaScript', 'Tailwind CSS', 'HTML' , 'CSS', 'Masonry JS ', 'Fancybox CSS'],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
      </div>
    </div>
  )
}

export default Projects;
