import React from 'react'
import { ErrorLabelProps } from './interface'

export const ErrorLabel: React.FC<ErrorLabelProps> = ({
    text,
    className,
    ...props
}) => {
    const defaultStyle = 'text-xs text-danger-normal block break-words'

    return (
        <p className={className || defaultStyle} {...props}>
            {text}
        </p>
    )
}
