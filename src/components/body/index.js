import React from 'react'
import About from './about';
import "./body.css";
import Contact from './contact';
import Mine from './mine';
import Project from './projects';
import Skill from './skill';
function Body() {
  return (
    <div className='body'>
        <section id='Home'>
            <About/>
        </section>
        <section id='About'>
            <Mine/>
        </section>
        <section id='Skills'>
            <Skill/>
        </section>
        <section id='Projects'>
            <Project/>
        </section>
        <section id='Contact'>
            <Contact/>
        </section>
    </div>
  )
}

export default Body