import React, { use } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
const ProductCard = ({product}) => {
    const {currency, addToCart , removeFromCart,cartItems,navigate} = useAppContext();
    return product && (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={()=>{navigate(`products/${product.category.toLowerCase()}/${product._id}`);scrollTo(0,0)}}
            className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full cursor-pointer"
        >
            <div className="group flex items-center justify-center px-2">
                <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="max-w-26 md:max-w-36"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        <img key = {i} className = "md:w-3.5 w3"src = {i < 4 ? assets.star_icon : assets.star_dull_icon} alt= ""  />
                    ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                      {currency}{product.offerPrice}{" "}
                      <span className="text-gray-500/60 md:text-sm text-xs line-through">
                        {currency}{product.price}
                      </span>
                    </p>
                    <div onClick={(e) => {e.stopPropagation();}} className="text-primary">
                        {!cartItems[product._id] ? (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart_icon" />
                                Add
                            </motion.button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() =>{ addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default ProductCard;