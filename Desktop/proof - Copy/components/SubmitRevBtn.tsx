import { Loader2 } from 'lucide-react';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from './ui/Button';

const SubmitRevBtn = () => {
    const { pending } = useFormStatus();
  return (
    <Button type='submit'>{pending ? <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...
      </> : "Submit Review"}</Button>
  )
}

export default SubmitRevBtn