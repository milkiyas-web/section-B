"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/Button'
import Image from 'next/image'
import logo from '../public/proof-logo.png'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import MobileMenu from './MobileMenu'
import { useNavigate } from 'react-router-dom'
import { Sign } from 'crypto'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    //console.log("page scroll:", latest)
    if(latest > 0 && !scrolled) {
        setScrolled(true);
    } else if(latest === 0 && scrolled) {
        setScrolled(false);
    }
  })
  const defaultClasses = "transition-all absolute inset-0 -z-1";
  let navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg` : `${defaultClasses} bg-transparent`;
  return (
    <div className='sticky inser-x-0 top-0 w-full z-30'>
        <div className={navBarClasses}></div>
        <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative '>
        <div className='flex items-center justify-between'>
            <div>
                <Image 
                    src={logo}
                    alt='logo'
                    width={100}
                    height={100}
                    className='mt-2'
                />
            </div>
            <nav className='hidden md:block'>
                <ul className='flex flex-row space-x-4 p-4'>
                    <li>
                        <Link href='/' className='text-gray-600'>About us</Link>
                    </li>
                    <li>
                        <Link href='/' className='text-gray-600'>Features</Link>
                    </li>
                    <li>
                        <Link href='/'>Pricing</Link>
                    </li>
                </ul>
            </nav>
            <div className='hidden md:block'>
                <SignInButton>
                    <Button  className=' bg-black text-white'>Login</Button>
                </SignInButton>
                <SignUpButton>
                    <Button className='bg-black text-white'>Sign up</Button>
                </SignUpButton>
            </div>
            <MobileMenu />
        </div>
        </div>
    </div>
  )
}

export default Navbar