import React from 'react'
import './about.css'
import ME from '../../assets/jaykwon_2.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Jay Kwon'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons'></FaAward>
              <h5>Experience</h5>
              <small>8+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icons'></FaUsers>
              <h5>Coworkers</h5>
              <small>500+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons'></VscFolderLibrary>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Since 2015, I have worked in Hyundai Motor's Infotainment UX development team 
          <br></br> and have been working on design and development 
          <br></br> with many colleagues around the world.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default about