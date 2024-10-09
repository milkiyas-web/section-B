 "use client";
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/Button'
import Image from 'next/image'
import heroimg from '../app/feedbackimg.png'
import { useNavigate  } from 'react-router-dom'
import { SignInButton } from '@clerk/nextjs';
const Hero = () => {
  return (
    <section className='hero-section text-center mt-32 flex flex-col'>
      <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-6l sm:leading'>Proof <br/>
        <span className='bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>Quickly and effortlessly collect customer reviews</span>
      </h1>
      <h2 className='mt-5 text-gray-600 sm:text-xl'>Your customers' words, Your business's strength.</h2>
      <div className='mx-auto flex max-w-fit space-x-4'>
        <SignInButton>
          <Button className='btn mt-8 rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2'>
            Get started
          </Button>
        </SignInButton>
        <Button className='btn mt-8 rounded-full  mx-auto max-w-fit border px-5 py-2 bg-white text-sm font-medium shadow-sm border-gray-200 hover:ring-gray-400 hover:ring-2'>
          Learn more
        </Button>
      </div>
      <div className='mt-5 items-center justify-center'>
        <Image 
          src={heroimg}
          alt='hero'
          className='mx-auto w-[500px] h-[400px] sm:h[600px]'
        />
      </div>
    </section>
  )
}

export default Hero