import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import FloatingVeggies from '../components/FloatingVeggies'
function Home() {
  return (
    <div className='mt-10 relative'>
      <FloatingVeggies/>
      <div className="relative z-10">
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
      </div>
    </div>
  )
}

export default Home
