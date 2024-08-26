import './tech.scss'
import { useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer' 

const cardAnimate = {
    initial: {
        y: -500,
        opacity: 0,
        transition: {
            repeat: 0,
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
            staggerDirection: 1,
        }
    }
}

const Tech = () =>{

    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(()=>{
        if(inView){
            controls.start("animate")
        }
    },[controls, inView])

    return (
            <motion.section className="tech" ref={ref} animate={controls} initial="initial" variants={cardAnimate}>
                <div className="wrapper">
                    <motion.div className="item" variants={cardAnimate}>
                        <span className='js'><IoLogoJavascript/></span>
                        <p>Javascript</p>
                    </motion.div>
                    <motion.div className="item" variants={cardAnimate}>
                        <span className='react'><FaReact/></span>
                        <p>ReactJS</p>
                    </motion.div>
                    <motion.div className="item" variants={cardAnimate}>
                        <span className='tailwind'><RiTailwindCssFill/></span>
                        <p>Tailwindcss</p>
                    </motion.div>
                    <motion.div className="item" variants={cardAnimate}>
                        <span className='github'><FaGithub/></span>
                        <p>Github</p>
                    </motion.div>
                </div>
            </motion.section>

    )
}

export default Tech