import React from 'react'
import SocialContact from '../../common/socialContacts'
import "./about.css"

function About() {
  
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
            Hello there, I am <br/>
            <span className='info-name'>
              Ashish Kumar Mohanty
            </span>. <br/> I love experimenting with web.
        </div>
        <div className='about-photo'>
          <img src={require("../../../image/developer.png")} className="picture"></img>
        </div>
      </div>
      <SocialContact />
      <div id="About"></div>
    </div>
  )
}

export default About