import React from 'react'
import './portfolio.css'
import INTERNALONLY from '../../assets/internalOnly.png'

import DIS2 from '../../assets/DIS2.png'
import PGEN5 from '../../assets/PGen5.png'
import CCIC from '../../assets/ccIC.png'

const data = [
  {
    id: 1,
    image: DIS2,
    title: 'DIS2',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }, 
  {
    id: 2,
    image: PGEN5,
    title: 'Premium Gen 5 Navigation',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }, 
  {
    id: 3,
    image: CCIC,
    title: 'ccIC',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }, 
  {
    id: 4,
    image: INTERNALONLY,
    title: 'Hyphen (IDE) for Infotainment',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }, 
  {
    id: 5,
    image: INTERNALONLY,
    title: 'Multi-Language System for Hyundai/KIA/GENESIS Infotainment',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }, 
  {
    id: 6,
    image: INTERNALONLY,
    title: 'Hyundai/KIA/GENESIS Infotainment Design System',
    github: 'https://github.com', 
    demo: 'https://dribbble.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key='id' className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='Default Image'></img>
                </div>
                <h3> {title} </h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

        

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DefaultIMG} alt='Default Image'></img>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DefaultIMG} alt='Default Image'></img>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DefaultIMG} alt='Default Image'></img>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DefaultIMG} alt='Default Image'></img>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DefaultIMG} alt='Default Image'></img>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default portfolio