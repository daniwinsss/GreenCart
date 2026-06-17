import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import tomato from '../assets/tomato_image.png'
import carrot from '../assets/carrot_image.png'
import spinach from '../assets/spinach_image_1.png'
import onion from '../assets/onion_image_1.png'
import apple from '../assets/apple_image.png'
import orange from '../assets/orange_image.png'
import milk from '../assets/amul_milk_image.png'
import bread from '../assets/brown_bread_image.png'
import soda from '../assets/coca_cola_image.png'
import maggi from '../assets/maggi_image.png'

const VEGGIE_IMGS = [
  { src: tomato, size: 104 },
  { src: carrot, size: 112 },
  { src: spinach, size: 100 },
  { src: onion, size: 108 },
  { src: apple, size: 96 },
  { src: orange, size: 102 },
  { src: milk, size: 110 },
  { src: bread, size: 106 },
  { src: soda, size: 98 },
  { src: maggi, size: 104 },
]

const FloatingVeggies = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const w = window.innerWidth
    const count = w < 768 ? 4 : 8
    const positions = []
    for (let i = 0; i < count; i++) {
      positions.push({
        id: i,
        veg: VEGGIE_IMGS[i % VEGGIE_IMGS.length],
        x: (i / count) * 100 + (Math.random() * 10 - 5),
        y: 10 + Math.random() * 70,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 3,
        rotate: Math.random() * 360,
      })
    }
    setItems(positions)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -18, 0, 12, 0],
            rotate: [item.rotate, item.rotate + 12, item.rotate - 8, item.rotate + 6, item.rotate],
            scale: [1, 1.06, 0.96, 1.02, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src={item.veg.src}
            alt=""
            className="opacity-60 md:opacity-70 select-none"
            style={{
              width: item.veg.size,
              height: item.veg.size,
              objectFit: 'contain',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingVeggies
