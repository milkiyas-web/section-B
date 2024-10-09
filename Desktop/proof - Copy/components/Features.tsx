import { title } from 'process'
import React from 'react'
import { Button } from './ui/Button'

const FeaturesList = [
    {
        id: 1,
        title: 'Add reviews to your website',
        description: 'Add reviews to your website to increase trust and credibility.',
        className: "md:col-span-2"
    },
    {
        id: 2,
        title: 'Collect and display your reviews in one solution',
        description: 'A dedicated widget at the bottom of your website to collect your reviews.',
        className: "md:col-span-2"
    },
    {
        id: 3,
        title: 'Get a sharable link to collect reviews',
        description: 'Get a sharable link that you can put on your socials and send to your customers to collect reviews .',
        className: "md:col-span-2"
    },
    {
        id: 4,
        title: 'A dashboard to manage your reviews',
        description: 'A simple dashboard to manage your reviews and see your overall rating.',
        className: "md:col-span-2"
    }
]

const Features = () => {
  return (
    <div className='py-20 w-full'>
        <h1>Features</h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {FeaturesList.map((feature) => (
                <Button key={feature.id} //   random duration will be fun , I think , may be not
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                    //   add these two
                    //   you can generate the color from here https://cssgradient.io/
                    background: "rgb(4,7,29)",
                    backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    // add this border radius to make it more rounded so that the moving border is more realistic
                    borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    // remove bg-white dark:bg-slate-900
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    <h3 className='text-xl font-semibold'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Features