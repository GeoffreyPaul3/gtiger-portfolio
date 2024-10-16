import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between'>
      <div className=' space-y-10 text-center lg:text-left'>
        <h1 className='text-white text-4xl lg:text-7xl font-bold'>Nice to meet you! 🙋🏾‍♂️ <br /> 
        <span className='underline underline-offset-8 decoration-green-500'>I&apos;m Geoffrey</span>
        </h1>
        <p className='text-gray-300 md:w-96 text-lg'>
            I&apos;m a Fullstack developer passionate about building modern web 
            applications with great user experiences.
        </p>
        <Link href={"mailto:geofreypaul40@gmail.com"} className='inline-block group'>
        <div>
        <h1 className='text-white text-3xl font-bold group-hover:text-green-400 transition-all'>
            Contact Me 📫
        </h1>
        <div className='w-40 h-2 bg-green-500 rounded-full '></div>
        <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
       </div>
        
        </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[20deg] px-4 relative'>
            <div className='flex gap-4 -translate-x-8'>
                 <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                 <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
            </div>
            <div className='flex gap-3 translate-x-8'>
                 <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                 <div className='w-32 h-32 rounded-full bg-green-500'></div>
            </div>

            <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
        <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>💼 Available for Work</p>
        </MovingBorderBtn>
        </div>
      </div>
    </div> 
  )
}

export default Hero
