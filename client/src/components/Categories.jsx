import React from 'react'
import { motion } from 'framer-motion'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
function Categories() {
    const {navigate} = useAppContext();
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
    }
    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    }
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Categories</p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6 '>
                {categories.map((category,index)=>(
                    <motion.div key={index} variants={item} whileHover={{ y: -6 }} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' style = {{backgroundColor : category.bgColor}}
                    onClick={() =>{
                        navigate(`/products/${category.path.toLowerCase()}`);
                        scrollTo(0,0);
                    }}
                    >
                        <img src={category.image} alt={category.text} className='group-hover:scale-108 transition max-w-28'/>
                        <p className='text-sm font-medium'>{category.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Categories
