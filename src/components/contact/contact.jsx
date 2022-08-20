import React from 'react';
import { useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {RiKakaoTalkFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fmrkhiq', 'template_wh57kdj', form.current, '-kQDm-KaChj4tsFED')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'></HiOutlineMail>
            <h4>Email</h4>
            <h5>jkwon.uxdeveloper@gmail.com</h5>
            <a href='mailto:jkwon.uxdeveloper@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'></AiFillLinkedin>
            <h4>LinkedIn</h4>
            <h5>JKwon-UXDeveloper</h5>
            <a href='https://www.linkedin.com/in/JKwon-UXDeveloper/'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiKakaoTalkFill className='contact__option-icon'></RiKakaoTalkFill>
            <h4>Kakao Talk</h4>
            <h5>JKwon.</h5>
            <a href=''>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name = 'email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Meesage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

//            <div className="socialMedia">
//                 <a href="mailto: jkwon.uxdeveloper@gmail.com">
//                     <EmailIcon></EmailIcon>
//                 </a>
//                 <a href="https://www.linkedin.com/in/jay-kwon-7a7aa3120/">
//                     <LinkedInIcon></LinkedInIcon>
//                 </a>
//                 <a href="https://github.com/JKwon-UXDeveloper">
//                     <GitHubIcon></GitHubIcon>
//                 </a>
//                 <a href="https://www.instagram.com/jloves9191/">
//                     <InstagramIcon></InstagramIcon>
//                 </a>
//             </div>