"use client"

import React from 'react'
import { motion } from 'framer-motion'

const TransitionVariants = {
    initial: {
        y: "100%",
        height: "100%"
    },
    animate: {
        y: "0%",
        height: "0%"
    },
    exit: {
        y: ["0%", "100%"],
        height: ["0%", "100%"],
    }
}

export function Transition () {
  return (
    <div>
        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-green-500'
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}} />

        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-red-500'
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}} />

        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-white'
        variants={TransitionVariants}
        initial="intial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}} />
    </div>
  )
}

