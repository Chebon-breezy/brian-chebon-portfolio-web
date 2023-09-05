import React from 'react'

import { AiOutlinePhone, AiOutlineMail, AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
      <div className='git'>
        <AiOutlinePhone />
        <p>Contact</p>
        <a href="tel:+254721318162">+254 721 318 162</a>
        </div>
        <div className='insta'>
          <AiOutlineMail />
            <p>Gmail</p>
            <a href="mailto:brynnlamura@gmail.com" target='_blank' rel='noreferrer'>Send Email</a>
        </div>
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/briannchebon" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/Chebon-breezy" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/@Chebon254" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/brian-chebon-8b081219a" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials