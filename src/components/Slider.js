import React from 'react'
import video1 from '../video/dubai.mp4'
import video2 from '../video/thailand.mp4'
import video3 from '../video/usa.mp4'
import {motion} from 'framer-motion'




const Slider = () => {
    const [count,setCount] = React.useState(0);
  
    const array =[{
        video:video1,
        title:'Dubai',
    },{
        video:video2,
        title:'Thailand'
    },
    {
        video:video3,
        title:'USA'
    }

    ]



    if(count<0){
        setCount(array.length-1)
        return
    }
    if(count> array.length-1){
        setCount(0)
        return
    }



   
  return (
    <>
    <div className="container">

       <motion.video src={array[count].video} 
        autoPlay loop muted
        
        whileHover={{
            scale:1.01,
            opacity:.8
        }}


        transition={{
            duration:.7,
            ease:'easeInOut',
            delay:.4
        }}

    
        > Your browser does not support this content
        </motion.video>


        <div className="slide-title">
            <p>{array[count].title}</p>
            <p>{count+1}/{array.length}</p>
        </div>
        <div className="controls">
            <button className='icon' onClick={()=>{setCount(count-1)}}><i className="fa-solid fa-chevron-left"></i></button>
            <button className='icon' onClick={()=>{setCount(count+1)}}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>

    
      
    </>
  )
}

export default Slider
