import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (

    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-green py-4 px-8 text-white mx-5'>Hi, I am <span className="font-semibold">Constantin</span>👋<br/>
        A Junior Software Developer based in London.</h1>
    ),
    2:(
        <InfoBox
        text="Explore my diverse skill set, developed through intensive training and hands-on experience. "
        link ="/about"
        btnText="Learn more"
        />

    ),   
    3:(
        <InfoBox
        text="I invite you to explore my portfolio, where you can find examples of my work and completed projects."
        link ="/projects"
        btnText="Visit my potfolio"
        />
    ),
    4:(
        <InfoBox
        text="Have questions or want to discuss a project? I’d love to hear from you! Let’s see how we can work together."
        link ="/contact"
        btnText="Get in touch"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo