import { InputProps } from './interface'

export const InputField: React.FC<InputProps> = ({
    isError,
    className,
    register,
    ...props
}) => {
    const defaultSyle = `mb-2 p-2 rounded-md border ${
        isError
            ? 'border-danger-light-hover placeholder-danger-light-hover focus:outline-danger-normal-active focus:text-danger-normal-active'
            : 'border-primary-light-hover placeholder-primary-light-hover text-primary-light-hover  focus:outline-primary-normal-active focus:text-primary-normal-active'
    } w-96 h-14`

    return (
        <input {...props} {...register} className={className || defaultSyle} />
    )
}
