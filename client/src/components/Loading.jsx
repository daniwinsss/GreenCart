import React from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Loading = () => {
    const {navigate} = useAppContext();
    let {search} = useLocation();
    const query = new URLSearchParams(search);
    const nextUrl = query.get('next');

    useEffect(()=>{
        if(nextUrl){
            setTimeout(()=>{
                navigate(`/${nextUrl}`)
            },5000)
        }
    },[nextUrl])
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex justify-center items-center h-screen'
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className='rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'
            />
        </motion.div>
    )
}

export default Loading
