import { useEffect, useRef, useState } from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
import Item from './Item'
import { getAllProject } from '../../utils/query'
import './portfolio.scss'


const Portfolio = () =>{
    const [projects, setProjects] = useState({})
    const ref = useRef()

    useEffect(()=>{
        const getProjects = async () =>{
            const item = await getAllProject()
            setProjects(item)
        }
        getProjects().catch()
    },[])
    
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping: 30,
    })


    return(
        <div className="portfolio" ref={ref}>
            <div className="bar">
                <h1>Some Projects</h1>
                <motion.div className="progressBar" style={{scaleX}}></motion.div>
            </div>
           {projects.length >=1 && projects.map((item)=>(
            <Item item={item} key={item.id}/>
           ))}
        </div>
    )
}
export default Portfolio