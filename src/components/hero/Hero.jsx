import './hero.scss'
import { motion } from 'framer-motion'

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

    return(
        <div className="hero">
            <div className="wrapperHero">
                <motion.div className="textContainer" variants={textAnimate} initial="initial" animate="animate">
                    <motion.h2 variants={textAnimate}>mrakasondara</motion.h2>
                    <motion.h4 variants={textAnimate}>Front End Developer</motion.h4>
                    <motion.div className="buttons" variants={textAnimate}>
                        <motion.a variants={textAnimate} href='cv.pdf' download={'cv.pdf'}>Download CV</motion.a>
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