import React from 'react'
import { motion,  } from 'framer-motion'


const Flight = () => {



    return (
        <>
            <div className="flightBox">
                
                <h1
                className='headingTop'
                >Flights </h1>
                

                <motion.p
                    className='flightCard'
                >

                    <motion.p className="a1 international"

                    initial={{
                        opacity:0,
                        y:-20
                    }}

                    transition={{
                        ease:'easeInOut',
                        duration:0.7,
                        delay:.3
                    }}
                    
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    
                    
                    >
                        <span className="flicon">
                        <i className="fa-solid fa-earth-americas"></i>
                        </span>
                        <p className='addFli'>
                            International Flights
                        </p>
                        <p>
                         Discover seamless international flight ticket services designed to connect you to destinations worldwide. Enjoy competitive fares, flexible booking options, and 24/7 customer support to make your travel experience effortless and enjoyable. Book your next adventure with confidence today!
                        </p>
                        
                    </motion.p>
                    <motion.p className="a1 domestic" 
                    
                    
                    initial={{
                        opacity:0,
                        y:-20
                    }}

                    transition={{
                        ease:'easeInOut',
                        duration:0.5,
                        delay:.5
                    }}
                    
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    
                    
                    
                    >
                    <span className="flicon">
                        <i className="fa-solid fa-umbrella-beach"></i>
                        </span>
                        <p className='addFli'>
                            Domestic Flights
                        </p>
                        <p>
                         Experience hassle-free domestic flight ticket services that cater to your travel needs across the country. With easy booking, competitive prices, and dedicated support, we ensure your journey is smooth from takeoff to landing. Plan your next getaway with us today!
                        </p>
                        
                    </motion.p>
                
                    
                    
                </motion.p>
                
            </div>
           

        </>
    )
}

export default Flight
