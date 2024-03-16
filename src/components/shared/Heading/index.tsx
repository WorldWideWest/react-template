import { HeadingProps } from './interface'

export const HeadingOne: React.FC<HeadingProps> = ({
    text,
    className,
    textStyle = 'text-4xl font-bold text-center text-primary-normal',
    ...props
}) => {
    const defaultStyle = `${textStyle} mb-8 sm:mb-8`

    return (
        <h1 {...props} className={className || defaultStyle}>
            {text}
        </h1>
    )
}
