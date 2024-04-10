import experiences from '../../api/experiences.json'
import { useLanguage } from '../../context/languageContext'

import { useRef,useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

import './experiences.css'

export function Experiences(){
    const {language} = useLanguage()

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });

    return(
        <section className='experiences' id='experiences'>
            <h1>Experiencias y educacion</h1>
            <div className='experiences-content' ref={ref}>

            <motion.div className="time-line" 
                        variants={{
                          hidden: { opacity: 0, height: 0, },
                          visible: { opacity: 1, height: '100%', },
                        }}
                        transition={{
                          ease: "linear",
                          duration: 0.5,
                          delay: 0.1,
                        }}
                        initial="hidden"
                        animate={isInview ? "visible" : "hidden"}
                    >
                    </motion.div>

                {experiences.map((exp, index)=>(
                <article className='row' key={`exp${index}`}>
                    <div className="title-time">
                      <motion.i className="circle"
                        
                        variants={{
                          hidden: { opacity: 0, scale: 0, },
                          visible: { opacity: 1, scale: 1, },
                        }}
                        transition={{
                          ease: "linear",
                          duration: 0.5,
                          delay: 0.1,
                        }}
                        initial="hidden"
                        animate={isInview ? "visible" : "hidden"}
                    ></motion.i>
                        <motion.div
                            variants={{
                              hidden: { opacity: 0, translateX: 90 },
                              visible: { opacity: 1, translateX: 0 },
                            }}
                            transition={{
                              type: "spring",
                              duration: 0.1,
                              damping: 10,
                              delay: 0,
                              stiffness: 80,
                            }}
                            initial="hidden"
                            animate={isInview ? "visible" : "hidden"}
                        >
                          <span>{exp.title[language]}</span>
                          <p>{exp.desc[language]}</p>
                        </motion.div>
                    </div>
                </article>
                ))}

            </div>
        </section>
    )
}