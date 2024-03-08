import React from 'react'
import LoadingIndicator from '../LoadingIndicator'
import { ButtonProps } from './interface'

export const PrimaryButton: React.FC<ButtonProps> = ({
    text,
    icon,
    isLoading,
    disabled,
    className,
    ...props
}) => {
    const defaultStyle = `items-center w-full h-12 sm:w-full px-4 py-2 mb-2 rounded-3xl sm:h-12 duration-300 ${
        disabled
            ? 'bg-primary-light text-primary-light-hover'
            : 'bg-primary-normal text-secondary-light'
    }`

    return (
        <button
            {...props}
            className={className || defaultStyle}
            disabled={disabled}
        >
            <span className="flex flex-row justify-center items-center">
                {isLoading ? (
                    <LoadingIndicator />
                ) : (
                    <div>
                        {icon} {text}
                    </div>
                )}
            </span>
        </button>
    )
}

export const SecondaryButton: React.FC<ButtonProps> = ({
    text,
    icon,
    isLoading,
    disabled,
    className,
    ...props
}) => {
    const defaultStyle = `flex flex-row justify-center gap-4 items-center w-full sm:w-full px-4 py-2 mb-2 rounded-3xl sm:h-12 ${
        disabled
            ? 'bg-secondary-light text-secondary-light-hover'
            : 'bg-secondary-normal text-secondary-light'
    }`

    return (
        <button
            {...props}
            className={className || defaultStyle}
            disabled={disabled}
        >
            {icon} {text}
        </button>
    )
}

export const ContinueWithIdentityProvider: React.FC<ButtonProps> = ({
    text,
    icon,
    isLoading,
    disabled,
    className,
    ...props
}) => {
    const defaultStyle = `
        flex flex-row justify-center gap-4 items-center 
        w-full px-4 py-2 mb-2 rounded-3xl sm:h-12 
        text-secondary-normal outline outline-secondary-normal outline-1 
        hover:text-secondary-normal hover:bg-secondary-light hover:transition duration-300`

    return (
        <button
            {...props}
            className={className || defaultStyle}
            disabled={disabled}
        >
            <span className="flex flex-row justify-center items-center">
                {isLoading ? (
                    <LoadingIndicator />
                ) : (
                    <div className="flex flex-row justify-center gap-4 items-center">
                        {icon} {text}
                    </div>
                )}
            </span>
        </button>
    )
}
