import React from 'react'
import { Button } from './ui/Button'

const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24'>
        <div className='container'>
        <div className='section-heading'>
        <h2 className='section-title'>Signup for free today</h2>
        <p className='section-description mt-5'>Collect your reviews and show it on your website without any knowledge of how to code.</p>
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
            <Button>
                Get for free
            </Button>
            <Button>
                Learn more
            </Button>
        </div>
        </div>
        
    </section>
  )
}

export default CallToAction