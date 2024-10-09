import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/Button';
import CustomFormField from './CustomFormField';

interface CustomProps {
    title: string,
    description: string,
    // question: string,
    customMessage: string,
    file?: File | string | null,
}
const CustomCard = ( props : CustomProps) => {
    const { title, description, file, customMessage } = props;
  return (
    <Card className='flex flex-col items-center justify-center rounded-lg border border-input p-6 md:p-8'>
        <CardHeader>
            
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{customMessage}</p>
        </CardContent>
        <CardFooter className='flex flex-col'>
            <Button className='w-full m-2 bg-black text-white'>Text</Button>
            <Button>Video</Button>
        </CardFooter>
    </Card>

  )
}

export default CustomCard