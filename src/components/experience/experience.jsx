import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__developing'>
          <h3>As a Designer</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>After Effect</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>XD</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>Framer</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
     
        <div className='experience__designing'>
          <h3>As a Developer</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsCheckCircleFill className='experience__detail-icon'></BsCheckCircleFill>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience