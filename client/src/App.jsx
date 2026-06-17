import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import Loading from './components/Loading'
import gsap from 'gsap'
import Lenis from 'lenis'

function App() {
  const isSellerPath = useLocation().pathname.includes('/seller');
  const {showUserLogin,isSeller} = useAppContext();
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = document.getElementById('app-loader-bar');
    if (bar) {
      gsap.fromTo(bar, { width: '0%' }, { width: '100%', duration: 1.5, ease: 'power2.inOut', onComplete: () => { gsap.to(bar, { opacity: 0, duration: 0.3 }) } });
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      <div id="app-loader"><div id="app-loader-bar" ref={progressRef}></div></div>
      {isSellerPath ? null : <Navbar/>}
      {showUserLogin ? <Login/> : null}
      <Toaster/>
      <div className={`${isSellerPath ? "" : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path ='/products' element = {<AllProducts/>}/>
          <Route path ='/products/:category' element = {<ProductCategory/>}/>
          <Route path ='/products/:category/:id' element = {<ProductDetails/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          <Route path ='/add-address' element = {<AddAddress/>}/>
          <Route path ='/my-orders' element = {<MyOrders/>}/>
          <Route path ='/loader' element = {<Loading/>}/>
          <Route path='/seller' element = {isSeller ? <SellerLayout/> : <SellerLogin/>}> 
            <Route index element = {isSeller ? <AddProduct/> : null}/>
            <Route path = 'product-list' element = {<ProductList/>}/>
            <Route path = 'orders' element = {<Orders/>}/>
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}
export default App
