import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>가나다라마바사아자차카타파하</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Project Manage</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>DIS2 Platform Mangement <br></br> - EQ900</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Premium Gen 5 Platform Management <br></br> - K9, G80, NEXO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>ccIC Platform Management <br></br> - GV60</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>ccIC 27" Platform Management <br></br> - GV80, GV70, GV60, G90, G80, G70</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Multi-Language System Management <br></br> - Hyundai/KIA/GENESIS Infotainment System</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services