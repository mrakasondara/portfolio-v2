import { useRef} from 'react'
import { Link } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import { motion,useScroll, useTransform } from 'framer-motion'
import './portfolio.scss'

const Item = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["start start", "end start"]
    })
    const yText = useTransform(scrollYProgress,[0,1], [0, -300])

    return (
        <section ref={ref}>
            <div className="container">
                <div className="imageContainer">
                    <img src={item.thumbnail} alt="" />
                </div>
                <motion.div className="textContainer" style={{y: yText}}>
                    <h3>{item.title}</h3> 
                    <p>{item.description}</p>
                    <div className="links">
                        <Link className='btn' target='_blank' to={item.hosting}>Demo</Link>
                        <Link className='github' target='_blank' to={item.repository}><FaGithub/></Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 

export default Item