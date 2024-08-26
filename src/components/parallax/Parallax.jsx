import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './parallax.scss'
const Parallax = ({title}) =>{

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yScale = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
    const zText = useTransform(scrollYProgress, [0, .5], [1, 0])

    return (
    <div className="parallax" ref={ref}>
        <motion.h1 style={{ y: yText,zIndex: zText}}>{title}</motion.h1>
        <motion.div className="stars" style={{y: yBg, x: yBg}}></motion.div>
        <motion.div className="moon" style={{scale: yScale}}></motion.div>
        <div className="mountains"></div>
    </div>
    )
}
export default Parallax