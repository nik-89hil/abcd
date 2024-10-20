import React from 'react'
import logo from '../video/OFFICIAL LOGO.png'
import Prom from './Prom';
import {motion} from 'framer-motion'


const Footer = () => {


    const whats = 'https://static-00.iconduck.com/assets.00/whatsapp-icon-1024x1024-cilsjgvb.png';
    const email = 'https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon.png';
    const call = "https://w7.pngwing.com/pngs/289/65/png-transparent-call-app-icon-iphone-computer-icons-symbol-call-angle-electronics-text-thumbnail.png";




  return (
    <>
    <div className='footer'>
        <div className="address">
            <p className='logo2'>
                <motion.img src={logo} 

                initial={{
                    rotate:'-30deg',
                    opacity:0
                }}

                whileInView={{
                    rotate:'0deg',
                    opacity:1

                }}

                transition={{
                    duration:3,
                    delay:.2,
                    ease:'circInOut',
                    repeatType:'mirror'
                }}
                
                alt="" srcset="" />
            </p>
            <p>
                <h2 style={{color:'black',textDecoration:'underline'}}>VC Team</h2>
            </p>
            <p>
                <i className="fa-solid fa-location-dot"></i> &nbsp;
                GF-08 Antriksh Bhawan, KG Marg, Barakhamba, New Delhi, Delhi-110001
            </p>

            <p>
                <i className="fa-solid fa-at"></i> &nbsp;
                <a href="mailto:info.vcteamr@gmail.com">info.vcteamr@gmail.com</a>
            </p>
            <p>
                <i className="fa-brands fa-square-whatsapp"></i>
                <a href="tel:+918920800296">+91 8920800296 (Rahul Kumar)</a>
            </p>
        </div>
        <div className='usefuLink'>
            <p className='connecter'>
                <h2>Contact us on :</h2>
                <br />
                <p className="social">
                    <a href=""><img src={call} alt="" srcset="" /></a>
                    <a href=""><img src={email} alt="" /></a>
                    <a href=""><img src={whats} alt="" /></a>
                </p>
            </p>
            <br />
            <p className='linker'>
                <a href="">Useful Links</a><br /><br />
                <a href="">Visa</a><br />
                <a href="">Flight</a><br />
                <a href="">Hotel</a><br />
                <a href="">Travel Packages</a>
            </p>
            <br />
            <p className='copyright'>
                Copyright &nbsp;
                <i class="fa-regular fa-copyright"></i>
                -2024 : VC Team :
                 All Rights are Reserved.
            </p>

        </div>
    
      
    </div>
    <Prom/>
    </>
  )
}

export default Footer
