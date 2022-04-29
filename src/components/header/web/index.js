import React from 'react'
import "./web.css"
function Web() {
  return (
    <div className='web'>
        <div className='web-option'>
            <a href="#Home">
                <i class="fi fi-rr-home option-icon"></i>Home
            </a>
        </div>
        <div className='web-option'>
            <a href="#About">
                <i class="fi fi-rr-info option-icon"></i>About
            </a>
        </div>
        <div className='web-option'>
            <a href="#Skills">
                <i class="fi fi-rr-laptop option-icon"></i>Skills
            </a>
        </div>
        <div className='web-option'>
            <a href="#Projects">
                <i class="fi fi-rr-edit-alt option-icon"></i>Projects
            </a>
        </div>
        <div className='web-option'>
            <a href="#Contact">
                <i class="fi fi-rr-user option-icon"></i>Contact
            </a>
        </div>
    </div>
  )
}

export default Web