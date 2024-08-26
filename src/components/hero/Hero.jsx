import { useEffect, useState } from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
import { getFile } from '../../utils/query'

const textAnimate = {
    initial: {
        x: -500,
        opacity: 0.5,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .8,
            staggerChildren: 0.1,
        },
    },
}

const sliderAnimate = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 15,
        },
    }
}

const Hero = () =>{
    const [file, setFile] = useState('')
    useEffect(()=>{
        const getCV = async () =>{
            const cv = await getFile()
            setFile(cv)
        }
        getCV().catch()
    },[])

    const downloadCV = () =>{
        const link = document.createElement('a')
        link.href = file
        link.download = 'mrakasondara_cv.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
    }


    return(
        <div className="hero">
            <div className="wrapperHero">
                <motion.div className="textContainer" variants={textAnimate} initial="initial" animate="animate">
                    <motion.h2 variants={textAnimate}>mrakasondara</motion.h2>
                    <motion.h4 variants={textAnimate}>Front End Developer</motion.h4>
                    <motion.div className="buttons" variants={textAnimate}>
                        <motion.button variants={textAnimate} onClick={downloadCV}>Download CV</motion.button>
                        <motion.a variants={textAnimate} href='#Contact'>Contact Me</motion.a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slideContainer" variants={sliderAnimate} initial="initial" animate="animate">
                Make it work, make it right, make it fast.
            </motion.div>
            <div className="imgContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero