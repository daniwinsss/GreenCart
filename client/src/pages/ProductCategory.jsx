import React from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';
function ProductCategory() {
    const {products} = useAppContext();
    const {category} = useParams();
    const searchCategory = categories.find((item)=>
        item.path.toLowerCase() === category
    );
    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='mt-16'>
            {searchCategory && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col items-end w-max'>
                    <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                    <div className='w-16 h-0.5 bg-primary rounded-full'></div>
                </motion.div>
            )}
            {
                filteredProducts.length > 0 ? (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
                        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'
                    >
                        {filteredProducts.map((product) => (
                            <motion.div key={product._id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                                <ProductCard product={product}/>
                            </motion.div>
                        ))}
                    </motion.div>
                ):(
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className='flex items-center justify-center h-[60vh]'>
                        <p className='text-2xl font-medium text-primary'>No products found in this category.</p>
                    </motion.div>
                )
            }
        </motion.div>
    )
}

export default ProductCategory
