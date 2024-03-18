import React from 'react'
import { InputWrapperProps } from './interface'

export const InputWrapper: React.FC<InputWrapperProps> = ({
    children,
    className,
}) => {
    const defaultStyle = 'flex flex-col flex-wrap items-left'
    return <div className={className || defaultStyle}>{children}</div>
}
