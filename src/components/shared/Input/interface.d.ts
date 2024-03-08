import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError: boolean
    register?: UseFormRegister
}
