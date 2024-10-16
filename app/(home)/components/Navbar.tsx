
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'

const Navbar = ({className}: {className?:string}) => {

    const socials = [
        {
            link: "https://www.linkedin.com/in/geoffrey-paul",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/GeoffreyPaul3",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link: "https://x.com/GeoffreyGtiger",
            label: "x",
            Icon: SiX,
        },
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className=' text-2xl text-white font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Geoffrey 🧑🏾‍💻</h1>

      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {

            const Icon = social.Icon

            return <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className='text-white w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
        })}
      </div>
    </nav>
  )
}

export default Navbar
