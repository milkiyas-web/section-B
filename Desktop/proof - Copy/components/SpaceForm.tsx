"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import CustomFormField from '@/components/CustomFormField';
import { Form } from './ui/form';
import { Button } from './ui/Button';
import { UserFormValidation } from '@/lib/validation';
import { createSpace } from '@/lib/actions/space.actions';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  FileUpload = 'fileUpload',
}

type UserFormData = z.infer<typeof UserFormValidation>;

interface SpaceFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SpaceForm: React.FC<SpaceFormProps> = ({ handleInputChange }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false)
  const form = useForm<UserFormData>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      spaceName: "",
      heading: "",
      customMessage: "",
    }
  });
  const onSubmit: SubmitHandler<z.infer<typeof UserFormValidation>> = async (data: z.infer<typeof UserFormValidation>, e?: React.BaseSyntheticEvent) => {
    setIsLoading(true);
    e?.preventDefault(); // Add this line
    //console.log(data)
    try {
      const response = await axios.post('/api/space', data)
      const responseData = response.data;
      //console.log(responseData);
     // router.push('/dashboard')
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=''>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="spaceName"
          label="Space name"
          placeholder='Portfolio'
          onChange={handleInputChange}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="heading"
          label="Header title"
          placeholder='Review my services'
          onChange={handleInputChange}
        />
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="customMessage"
          label="Custom message"
          placeholder='How did my experience with this service help you? And how did you find it?'
          onChange={handleInputChange}
        />
        <Button className='mt-2' type='submit' variant="outline">
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
};

export default SpaceForm;
