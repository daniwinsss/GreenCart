import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
function AllProducts() {
    const {products,searchQuery} = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        } else {
            setFilteredProducts(products);
        }
    },[products,searchQuery])
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'
            >
                {
                    filteredProducts.filter((product)=>product.inStock).
                    map((product,index)=>(
                        <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                            <ProductCard product = {product}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default AllProducts
