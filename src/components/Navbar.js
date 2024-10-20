import React, { useState } from 'react'
import { delay, motion, MotionConfig, useAnimationControls, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom';
import Logo from '../video/OFFICIAL LOGO.png'




const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [menu,setMenu] = useState(true);
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("popup");
    setIsVisible(!isVisible);
  }

  const handleMenu = () =>{
    setMenu(!menu)
    console.log(menu,"---")
  }

  const variants= {
    intial: {
      opacity: 0,
      scale:0.5
    },
    popup: {
      opacity: 1,
      scale:1
    },
    transition:{
      duration:.5,
      delay:0,
      ease: 'backInOut',
      type:'spring'
    }
  }


  return (
    <>
      <MotionConfig
        transition={{
          duration: .6,
          delay: .5,
          ease:'easeInOut'
        }}
      >
        <motion.div className='navbar'
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0
          }}

        >
          <div className='leftBar'>
            <p className="logo">
              <img src={Logo} alt="" srcset="" />
            </p>
            <p className='tag'> 
              VC Team
            </p>
            <p className='showMenu'>
              {
                (menu)?(
                  <span className="icon" onClick={handleMenu}>
                    <i class="fa-regular fa-circle-xmark"></i>
                    
                  </span>
                ):(
                  <span className="icon" onClick={handleMenu}>
                    <i class="fa-solid fa-bars"></i>
                    
                  </span>
                )
              }
            </p>
          </div>

          <AnimatePresence>
          {
            menu &&
            (
              
              <motion.div className="rightBar"

              initial={{
                x:-100,
                opacity:0.3,
              }}

              animate={{
                x:0,
                opacity:1
              }}
              
              transition={{
                delay:.2,
                duration:.7,
                ease:'easeInOut'
              }}
              
              exit={{
                x:-100,
                opacity:0.3,
              }}
             
              
              >
                <p>
                  <a href="#Home">
                  <i className="fa-regular fa-snowflake"></i>
                  Home
                  </a>
                </p>
                <p>
                  <a href="#Visa">
                  <i className="fa-solid fa-passport"></i>
                  Visa
                  </a>
                </p>
                <p>
                  <a href="#Flight">
                  <i className="fa-solid fa-plane-departure"></i>
                  Flight
                  </a>
                </p>
                <p>
                  <a href="#Hotel">
                  <i className="fa-solid fa-hotel"></i>
                  Hotel
                  </a>
                </p>
                <p>
                  <a href="#travelPackage">
                  <i className="fa-solid fa-hotel"></i>
                  Travel Packages
                  </a>
                </p>
              
              </motion.div>
              
            )
          }
          </AnimatePresence>
           
      
        </motion.div>
      </MotionConfig>

    </>
  )
}

export default Navbar
