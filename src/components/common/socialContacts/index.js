import React from 'react'
import { SocialData } from '../../data/social'
import "./social-contact.css"
function SocialContact() {
    const data= SocialData;
  return (
    <div className='social-contact'>
        {data.map((item)=>(
            <a target="_blank" href={item.link}>
                <div className='social-icon-div'>
                    {/* <img src={item.icon} className="social-icon"/> */}
                    <div className='social-icon'>{item.icon}</div>
                </div>
            </a>
        ))}
    </div>
  )
}

export default SocialContact