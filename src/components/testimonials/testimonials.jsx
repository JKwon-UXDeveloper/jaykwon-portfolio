import React, { useRef, useState } from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/client1.png'
import CLIENT2 from '../../assets/client2.png'
import CLIENT3 from '../../assets/client3.png'

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { 
    avatar: CLIENT1,
    name: 'Coworker 1',
    review: "It's being prepared."
  },
  { 
    avatar: CLIENT2,
    name: 'Coworker 2',
    review: "It's being prepared."
  },
  { 
    avatar: CLIENT3,
    name: 'Coworker 3',
    review: "It's being prepared."
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        pagination={{ clickable: true }} 
        // pagination={ true } 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        className='container testimonials__container'
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials