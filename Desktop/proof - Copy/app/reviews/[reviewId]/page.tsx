/**
 * v0 by Vercel.
 * @see https://v0.dev/t/flnd88ByUgS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import SubmitRevBtn from "@/components/SubmitRevBtn"
import { createReview } from "@/actions/createReview"

export default function ReviewForm({ params } : { params: { reviewId: string }}) {
  const { reviewId } = params;
  if(!reviewId) return <p>Loading..</p>
    
  const [rating, setRating] = useState(3)
  return (
    <Card className="bg-background p-6 sm:p-8">
      <form action={createReview}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Leave a review</CardTitle>
        <CardDescription className="text-muted-foreground">Share your thoughts about our product.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="review">Review</Label>
          <Textarea id="review" placeholder="Share your thoughts about our product..." rows={4} />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Rating:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                className={`w-5 h-5 ${star <= rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <SubmitRevBtn />
      </CardFooter>
      </form>
    </Card>
  )
}

function StarIcon(props : any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}