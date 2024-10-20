import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Contact = () => {

    const [visible,setVisible] = React.useState(false);

    const handleClick = () =>{
        setVisible(!visible)
    }

    const call = "https://w7.pngwing.com/pngs/289/65/png-transparent-call-app-icon-iphone-computer-icons-symbol-call-angle-electronics-text-thumbnail.png"
    const add = "https://www.freeiconspng.com/uploads/message-icon-png-2.png"

  return (
    <div className='contact'>
        <AnimatePresence>
        {
            visible &&
            (
                <motion.p

                // onMouseEnter={handleClick}

                initial={{
                    opacity:0,
                    height:0,
                    width:0,
                    y:0
                }}

                animate={{
                    opacity:1,
                    height:'auto',
                    width:'auto',
                    y:0
                }}

                transition={{
                    delay:.1,
                    duration:.2
                }}

                exit={{
                    opacity:0,
                    height:0,
                    width:0,
                    y:0
                }}
                
                
                >
                <a href="">
                    <img src={call} alt="" srcset="" />
                </a>
                <a href="mailto:info.vcteamr@gmail.com">
                    <img src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon.png" alt="" srcset="" />
                
                </a>
                <a href="">
                    <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-1024x1024-cilsjgvb.png" alt="" srcset="" />
                </a>
                </motion.p>

            )

        }
        </AnimatePresence>

        <a href='' onMouseEnter={handleClick}  onClick={handleClick}>
        <motion.img src={add} alt="" srcset="" />
        </a>
    
      
    </div>
  )
}

export default Contact
