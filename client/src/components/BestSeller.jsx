import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'
function BestSeller() {
    const { products } = useAppContext();
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6  mt-6'>
                {products.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                        <ProductCard product={product}/>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default BestSeller
