import {motion} from 'framer-motion'
import { useState } from 'react'
const Test = () =>{

    const items = ["item1", "item2", "item3"]
    const variants = {
        hidden:{opacity: 0},
        visible:{
            opacity: 1, 
            // x: 100,
            transition: {staggerChildren: 0.2},    
        },
    }

    return(
        <div className="container">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map(item=>(
                    <motion.li variants={variants} key={item}>{item}</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Test