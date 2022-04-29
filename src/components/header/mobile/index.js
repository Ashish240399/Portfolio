import React from 'react'
import "./mobile.css";
function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=>{setIsOpen(!isOpen)}}>
            <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className='mobile-option'>
            <a href="#Home">
                <i class="fi fi-rs-house-flood"></i>Home
            </a>
        </div>
        <div className='mobile-options'>
            <div className='mobile-option'>
                <a href="#About">
                    <i class="fi fi-rr-info option-icon"></i>About
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#Skills">
                    <i class="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#Projects">
                    <i class="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#Contact">
                    <i class="fi fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mobile