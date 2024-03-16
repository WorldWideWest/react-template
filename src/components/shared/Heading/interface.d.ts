import { HTMLAttributes } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    text: string
    textStyle?: string
}
