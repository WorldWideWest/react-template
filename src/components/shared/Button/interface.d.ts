import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: any
    isLoading?: boolean
}
