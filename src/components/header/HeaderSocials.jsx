import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/JKwon-UXDeveloper' target="_black"><BsLinkedin></BsLinkedin></a>
      <a href='https://github.com/JKwon-UXDeveloper' target="_black"><FaGithub></FaGithub></a>
      <a href='https://www.instagram.com/jloves9191/' target="_black"><BsInstagram></BsInstagram></a>
    </div>
  )
}

export default HeaderSocials