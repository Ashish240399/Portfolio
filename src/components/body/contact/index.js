import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/socialContacts'
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"
import Footer from '../../footer';
function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3c7rdek",
        "template_u1p6phq",
        form.current,
        "C4H3aZmTDxqsujYz8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <p>Want to get in touch? Contact me any of the platform </p>
        <SocialContact/>
        
      </div>
      <div className='contact-mail'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <Separator/>
      <Footer/>
      
    </div>
  )
}

export default Contact