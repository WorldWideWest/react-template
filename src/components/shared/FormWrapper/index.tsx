import React from 'react'
import { FormWrapperProps } from './interface'

export const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='xl:w-form-w-xl lg:w-form-w-lg md:w-form-w-md sm:w-form-w-sm xs:w-form-w-xs'>
                {children}
            </div>
        </div>
    )
}
