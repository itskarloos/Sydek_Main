import styles from "../../../../style";
import "../../logo.css"
import { ui , rectangle, arrow} from "../../../../assets"
import React, {useEffect, useRef } from "react";
import {motion,useInView,useAnimation} from "framer-motion";
const Service = () =>{
  
    return(
        
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
            <div className="flex flex-row justify-between w-[100%] flex-wrap">
            
            <div className="service-text">
              

            <h1 className='flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] '>
            Service
            </h1> 
            </div>
            
            

            </div>
          
            <p className={`${styles.paragraph} font-thin`}>We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.</p>
            <div className={`flex ${styles.flexStart} flex-row flex-wrap justify-between mt-5 w-[100%]`}>
            
            <div className="frame mr-5 mb-5">
      <div className="overlap-group ">
        <img className="rectangle" alt="Rectangle" src={rectangle} />
        <div className="div" />
        <div className="text-wrapper">Web Development</div>
        <p className="p">Our team builds great websites by combining creativity, technology, and user experience.</p>
        <img className="development" alt="Development" src={ui} />
      </div>
    </div>
    <div className="frame  mr-5 mb-5">
      <div className="overlap-group ">
        <img className="rectangle" alt="Rectangle" src={rectangle} />
        <div className="div" />
        <div className="text-wrapper">Web Development</div>
        <p className="p">Our team builds great websites by combining creativity, technology, and user experience.</p>
        <img className="development" alt="Development" src={ui} />
      </div>
    </div>
    <div className="frame mr-5 mb-5">
      <div className="overlap-group ">
        <img className="rectangle" alt="Rectangle" src={rectangle} />
        <div className="div" />
        <div className="text-wrapper">Web Development</div>
        <p className="p">Our team builds great websites by combining creativity, technology, and user experience.</p>
        <img className="development" alt="Development" src={ui} />
      </div>
    </div>
    <div className="frame mr-5 mb-5">
      <div className="overlap-group ">
        <img className="rectangle" alt="Rectangle" src={rectangle} />
        <div className="div" />
        <div className="text-wrapper">Web Development</div>
        <p className="p">Our team builds great websites by combining creativity, technology, and user experience.</p>
        <img className="development" alt="Development" src={ui} />
      </div>
      
    </div>
 
                    </div>
                    <div className={`flex ${styles.flexStart} flex-row flex-wrap justify-between mt-2 w-[100%]`}>
                    <button className="service-btn   flex mt-5 justify-between"> More Services </button>
                    </div>
            </div>
            
                
        </section>
    )
}
export default Service