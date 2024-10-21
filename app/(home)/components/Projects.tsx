import React from 'react'
import { SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiReacthookform, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const Projects = () => {

    const projects = [
        {
            title: "Dream Employ - Simplify your job search with our cutting-edge platform.",
            tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiPostgresql, SiReacthookform],
            link: "https://www.dreamemploy.com",
            cover: "/project-1.png",
            background: "bg-indigo-500",
        },
        {
            title: "Filehugger - The greatest online tool for unlimited and free multimedia converting. ",
            tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiShadcnui],
            link: "https://filehugger.vercel.app",
            cover: "/project-2.png",
            background: "bg-green-500",
        },
        {
            title: "TPay - Easily exchange currencies and make payments with T Pay. Secure and reliable services for all your financial needs.",
            tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,SiShadcnui, SiMongodb, SiReacthookform],
            link: "https://t-pay.vercel.app",
            cover: "/project-3.png",
            background: "bg-green-500",
        },
        {
            title: "Music in the Hood - Your go-to destination for discovering the next big stars in the music industry.",
            tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, ],
            link: "https://music-inthe-hood.vercel.app",
            cover: "/project-4.png",
            background: "bg-indigo-500",
        },
    ]

  return (
    <div className='py-10 p-5 sm:p-0'>
       <Title text='Projects 🗃️' className='flex flex-col items-center justify-center rotate-6'/>

       <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
         {projects.map((project, index) => {
            return <Link href={project.link} key={index}>
                <div className={cn("p-5 rounded-md", project.background)}>
                    <DirectionAwareHover
                     imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'
                    >
                        <div className='space-y-5 bg-gray-900'>
                        <h1 className='text-white text-2xl font-medium'>{project.title}</h1>
                        <div className='flex items-center gap-5'>
                            {project.tech.map((Icon,index) => {
                                return <Icon key={index} className='w-8 h-8'/>
                            })}
                        </div>
                        </div>
                    </DirectionAwareHover>
                </div>
            </Link>
         })}
       </div>
    </div>
  )
}

export default Projects
