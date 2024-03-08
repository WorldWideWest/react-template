import React from 'react'
import { ErrorLabelProps } from './interface'

export const ErrorLabel: React.FC<ErrorLabelProps> = ({
    text,
    className,
    ...props
}) => {
    const defaultStyle =
        'text-xs text-left text-danger-normal flex-1 block overflow-y overflow-x-hidden break-words'

    return (
        <p className={className || defaultStyle} {...props}>
            {text}
        </p>
    )
}
