import React from 'react'
import Separator from '../../common/separator'
import "./mine.css"
function Mine() {
  return (
   
    <div className='myabout'>
        <Separator id="About-bar"/>
        <label className='section-title'>About</label>
        <div className='Mine'>
            <img src={require("../../../image/photo.JPG")}></img>
            <div className='details'>
                <p>Observant and detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to work in a collaborative and creative work environment</p>
                <div className='download'>
            <a download href={require("../../../image/Ashish-Resume.pdf")}>
                <i class="fi fi-rr-download"></i>
               Resume
            </a>
            </div>
            </div>
        </div>
        <div id="Skills"></div>
    </div>
 
  )
}

export default Mine