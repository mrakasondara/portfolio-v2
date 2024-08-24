import { useRef } from 'react'
import {motion, useScroll, useSpring} from 'framer-motion'
import './portfolio.scss'

const items = [
    {
        id: 1,
        title: 'E-Commerce',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repellat.',
        img: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 2,
        title: 'Music App',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repellat.',
        img: 'https://images.pexels.com/photos/16285117/pexels-photo-16285117/free-photo-of-vintage-musik-retro-pemutar-rekaman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 3,
        title: 'E - Learning',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repellat.',
        img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]

const Item = ({item}) =>{
    return (
        <section>
            <div className="container">
                <img src={item.img} alt="" />
                {item.title}
            </div>
        </section>
    )
} 

const Portfolio = () =>{
    const ref = useRef()

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
           {items.map((item)=>(
            <Item item={item} key={item.id}/>
           ))}
        </div>
    )
}
export default Portfolio