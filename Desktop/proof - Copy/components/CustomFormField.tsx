import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Control } from 'react-hook-form';
import { FormFieldType } from './SpaceForm';
import Image from 'next/image';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface CustomProps {
    control: Control<any>
    fieldType: FormFieldType
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    children?: React.ReactNode,
    onChange: React.ChangeEventHandler<HTMLInputElement>  
}
const RenderField = ({ field, props }: {field: any, props: CustomProps}) => {
    const { iconAlt, placeholder, onChange, iconSrc, label, fieldType } = props;
    switch(fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md border-dark-500 bg-dark-400'>
                    {/* {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            className='ml-2'
                        />
                    )} */}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input"
                            
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.FileUpload:
            return (
                <FormControl>
                    <Input 
                        type='file'
                        {...field}
                        className="shad-input"
                    />
                </FormControl>
            );
        case FormFieldType.FileUpload:
            return(
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        {...field}
                        className="shad-input"
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={placeholder}
                        {...field}
                        className="shad-input"
                    />
                </FormControl>
            )
        default:
            return null;
        break;
    }
}
const CustomFormField = (props: CustomProps) => {
  const { control, label, name, fieldType } = props;
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                {fieldType !== FormFieldType.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}
                <RenderField field={field} props={props} />
                <FormMessage className='shad-error'/>
            </FormItem>
        )}

    >
    </FormField>
  )
}

export default CustomFormField