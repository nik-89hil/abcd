import React from 'react'
import {motion} from 'framer-motion'

const Travel = () => {
  return (
    <div className='insCont'>
        <h1 className='headingTop'>
            Travel Insurance
        </h1>
        <motion.p className='traDes'

        initial={{
            opacity:0
        }}


        whileInView={{
           opacity:1
        }}

        transition={{
            delay:0.4,
            duration:0.4,
            ease:'backInOut',
        }}
        
        
        >
        Travel insurance is a valuable investment for your peace of mind while on the road. It safeguards you against unforeseen events, allowing you to fully enjoy the experiences that await you. Don’t travel without it—consider travel insurance your essential partner for every journey!
        Check out our selection of travel insurance options today, and make sure your next adventure is as stress-free as it can be!
        </motion.p>
    </div>
  )
}

export default Travel
