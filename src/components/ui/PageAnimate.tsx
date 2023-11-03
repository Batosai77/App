'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const PageAnimate = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
        initial={{ scale: 0, x: -1000 }}
        animate={{ scale: 1, x: 0, y: 0}}
        transition={{
          delay: 0.3,
          duration: 2}}
        exit={{x:0, y:0}}>
            {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default PageAnimate;
