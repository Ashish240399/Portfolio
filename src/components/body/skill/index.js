import React from 'react'
import Separator from '../../common/separator';
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import "./skills.css";
function Skill() {
  const data=SkillsData;
  return (
    <div className='skills'>
      <Separator/>
      <label className='section-title'>Skills</label>
      <div className='skills-container'>
        {data.map((item)=>(
          <div className='skills-section'>
            <label className='skills-section-title'>{item.type}</label>
            <div className='skills-list'>
              {item.list.map((skill)=>(
                <SkillCard skill={skill}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill