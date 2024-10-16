"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAppwrite, SiClerk, SiFirebase, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {

    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next,js",
            Icon: SiNextdotjs,
        },
        {
            text: "TypeScript",
            Icon: SiTypescript,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "JavaScript",
            Icon: SiJavascript,
        },
        {
            text: "Tailwindcss",
            Icon: SiTailwindcss,
        },
        {
            text: "Mongodb",
            Icon: SiMongodb,
        },
        {
            text: "Firebase",
            Icon: SiFirebase,
        },
        {
            text: "Postgresql",
            Icon: SiPostgresql,
        },
        {
            text: "Github",
            Icon: SiGithub,
        },
        {
            text: "Clerk",
            Icon: SiClerk,
        },
        {
            text: "Appwrite",
            Icon: SiAppwrite,
        },
    ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
       <Title text='Skills </>' className='flex flex-col items-center justify-center -rotate-6'/>
       <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills
