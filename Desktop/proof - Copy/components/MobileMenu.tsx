import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import Link from 'next/link';
const navItems = [
    {
        title: 'Features',
        url: '/features'
    },
    {
        title: 'About us',
        url: '/about'
    },
    {
        title: 'Pricing',
        url: '/features'
    },
    {
        title: 'Login',
        url: '/login'
    },
    {
        title: 'Sign up',
        url: '/signup'
    }
    
]
const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='block md:hidden'>
        {
        !isOpen ? (
         <button onClick={() => 
        setIsOpen(true)}>
            <Menu size={32} />

        </button>
        ) : (
        <>  
            <button onClick={() => setIsOpen(false)}>
                <X size={32} />
            </button>
            <div className='absolute left-0 w-full  bg-white/60 backdrop-blur-lg border-b border-t'>
              <ul className='flex flex-col py-4 items-center'>
                {navItems.map((item, index) => (
                    <Link
                        href={item.url} 
                        key={index}
                        className='block p-4 text-gray-600'
                    >
                        {item.title}
                    </Link>
                ))}
              </ul>
            </div>
        </>  
        )}
    </div>
  )
}

export default MobileMenu