import './sidebar.scss'
import { useState } from 'react'
import {motion} from 'framer-motion'
import Links from './Links'
import ToggleButton from './ToggleButton'

const Sidebar = () =>{
    const [open, setOpen] = useState(false)

    const variants = {
        closed:{
            clipPath: "circle(15px at 30px 25px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness:400,
                damping: 40,
            }
        },
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                duration: 2,
                type: "spring",
            }
        },
    }

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton open={open} setOpen={setOpen}/>
        </motion.div>
    )
}
export default Sidebar