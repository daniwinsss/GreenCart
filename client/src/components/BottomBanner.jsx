import React from 'react'
import { motion } from 'framer-motion'
import { assets, features } from '../assets/assets'

function BottomBanner() {
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    }
    const item = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    }
    return (
        <div className='relative mt-24 overflow-hidden'>
            <motion.img initial={{ scale: 1.05, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/>
            <motion.img initial={{ scale: 1.05, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden'/>
            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>Why We Are The Best?</h1>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
                        {features.map((feature, index) => (
                            <motion.div key = {index} variants={item} className='flex items-center gap-4 mt-2'>
                                <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                                <div>
                                    <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                                <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default BottomBanner
