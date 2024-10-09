import React from 'react'
import { Button } from './ui/Button'

function CheckIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="bg-background rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-bold">Free</h3>
          <p className="text-muted-foreground">Everything you need to get started</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Text review</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Review collection links</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary" />
            <span>Clean dashboard</span>
          </div>
        </div>
        <div>
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
      <div className="bg-primary rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-primary-foreground">Pro</h3>
          <p className="text-primary-foreground">Everything in Free, plus more</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground">Text review</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground">Review collection links</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground">Clean dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground">Video review</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground">Review collection widget</span>
          </div>
        </div>
        <div>
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing