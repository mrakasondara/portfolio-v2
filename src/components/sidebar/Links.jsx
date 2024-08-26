import {motion} from 'framer-motion'

const variants = {
    open: {
        transition:{
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.5,
            staggerDirection: -1,
        },
    },
}

const itemVariants = {
    open: {
        x: 0,
        opacity: 1
    },
    closed: {
        x: -50,
        opacity: 0
    },
}

const Links = () =>{
    const items = ["Home","Tech","Projects", "Contact"]
    
    return(
        <motion.div className="links" variants={variants}>
            {items.map(item=>(
                <motion.a 
                    href={`#${item}`} key={item}
                    variants={itemVariants}
                    >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}
export default Links