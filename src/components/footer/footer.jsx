import React from 'react'
import './footer.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Jay Kwon</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="mailto: jkwon.uxdeveloper@gmail.com">
            <HiOutlineMail></HiOutlineMail>
        </a>
        <a href="https://www.linkedin.com/in/JKwon-UXDeveloper">
            <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href="https://github.com/JKwon-UXDeveloper">
            <BsGithub></BsGithub>
        </a>
        <a href="https://www.instagram.com/jloves9191/">
            <BsInstagram></BsInstagram>
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Jay Kwon. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer