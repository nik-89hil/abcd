import React from 'react'
import {motion} from 'framer-motion'

const Hotel = () => {

  const variants = {
    intial:{
      x:-15,
      opacity:.2
    },
    animate:{
      x:0,
      opacity:1
    },
    transition:{
      delay:.4,
      duration:0.6,
      ease:'circInOut'
    }

  }




  return (
    <>
    <div className="hotelCon">
        <h1 className='headingTop'
        >Hotel Booking
        </h1>
        <br />
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Experience Seamless Travel</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          Effortless Hotel Booking at Your Fingertips
          With just a few clicks, discover and reserve the ideal accommodation for your next getaway.
        </motion.p>
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Instant Confirmation</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          No more waiting! Enjoy immediate booking confirmations and peace of mind for your travel plans.
        </motion.p>
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Best Price Guarantee</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          We strive to ensure you get the best rates available, helping you save on your travels.
        </motion.p>
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Personalized Service</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          Our expert team is here to assist you with tailored recommendations and support throughout your booking process.
        </motion.p>
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Easy Booking Process</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          Enjoy a quick and secure booking experience, with instant confirmation for your peace of mind.
        </motion.p>
        <motion.p
        initial={variants.intial}
        whileInView = {variants.animate}
        transition={variants.transition}
        >
          <h4>Let’s Get Started!</h4>
          <span className='hash'><i className="fa-solid fa-hashtag"></i></span>
          Discover the difference with <span style={{textDecoration:'underline'}}>VC TEAM</span>. Whether you’re planning a weekend getaway, a business trip, or an extended vacation, we’re here to help you every step of the way. Explore your options and book your next adventure today!
        </motion.p>
    </div>
    </>
  )
}

export default Hotel
