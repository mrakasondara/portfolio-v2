import './navbar.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () =>{
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale: 0.5}}
                    animate={{opacity:1, scale: 1}}
                    transition={{duration: .8}}>
                    mrakasondara
                </motion.span>
                <div className="links">
                <Link to={'https://www.github.com/mrakasondara'} target='_blank'><FaGithub/></Link>
                <Link to={'https://www.linkedin.com/in/mrakasondara'} target='_blank'><FaLinkedin/></Link>
                <Link to={'https://www.instagram.com/mrakasondara'} target='_blank'><FaInstagram/></Link>
                
                </div>
            </div>
        </div>
    )
}
export default Navbar