import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='green-gradient_text font-semibold drop-shadow'>Constantin</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        a London-based junior software developer
        with a passion for technology.My interests include exploring new tech trends, coding innovative solutions, and continuously expanding my skill set to stay ahead in the ever-evolving world of software development.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center intems-center'>
                <img 
                src={skill.imageUrl} 
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                 />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default About