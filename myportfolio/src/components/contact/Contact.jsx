import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p9kda6d', 'template_w7hkcop', form.current, 'F-BNGTUE4UtfHqwl2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__optino-icon'/>
            <h4>Email</h4>
            <h5>toindranildutta@gmail.com</h5>
            <a href="mailto:toindranildutta@gmail.com" target='_blank'>Send a mail</a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__optino-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8972412642</h5>
            <a href="https://wa.me/+918972412642" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__optino-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8972412642</h5>
            <a href="https://wa.me/+918972412642" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact