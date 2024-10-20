"use client"

import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeInOut' } }
};

const fadeInWithDelay = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1, ease: 'easeInOut' } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const buttonHoverEffect = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const Hero = () => {
  return (
    <motion.div 
      className='min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between'
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates when the component enters the viewport
    >
      {/* Left Side Text */}
      <motion.div className='space-y-10 text-center lg:text-left' variants={fadeInUp}>
        <motion.h1 className='text-white text-4xl lg:text-7xl font-bold' variants={fadeInUp}>
          Nice to meet you! 🙋🏾‍♂️ <br /> 
          <span className='underline underline-offset-8 decoration-green-500'>
            I&apos;m Geoffrey
          </span>
        </motion.h1>
        
        <motion.p className='text-gray-300 md:w-96 text-lg' variants={fadeInWithDelay}>
          I&apos;m a Fullstack developer passionate about building modern web 
          applications with great user experiences.
        </motion.p>

        <Link href={"mailto:geofreypaul40@gmail.com"} className='inline-block group'>
          <motion.div 
            className='group' 
            variants={fadeInWithDelay}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className='text-white text-3xl font-bold group-hover:text-green-400 transition-all'>
              Contact Me 📫
            </h1>
            <div className='w-40 h-2 bg-green-500 rounded-full'></div>
            <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Right Side (Shapes and Button) */}
      <motion.div className='relative' variants={imageVariants}>
        <motion.div className='w-72 h-72 space-y-3 -rotate-[20deg] px-4 relative'>
          <div className='flex gap-4 -translate-x-8'>
            <motion.div 
              className='w-32 h-32 rounded-2xl bg-green-500'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className='w-32 h-32 rounded-full bg-indigo-500'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className='flex gap-3 translate-x-8'>
            <motion.div 
              className='w-32 h-32 rounded-2xl bg-indigo-500'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className='w-32 h-32 rounded-full bg-green-500'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
        </motion.div>

        <motion.div 
          className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10' 
          variants={fadeInWithDelay}
        >
          <MovingBorderBtn 
            borderRadius='0.5rem' 
            className='p-3 font-semibold'
            whileHover={buttonHoverEffect}
          >
            <p>💼 Available for Work</p>
          </MovingBorderBtn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
