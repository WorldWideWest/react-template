import { HeadingProps } from './interface'

export const HeadingOne: React.FC<HeadingProps> = ({
    text,
    className,
    ...props
}) => {
    const defaultStyle =
        'text-4xl font-bold text-center mb-8 sm:mb-8 text-primary-normal'

    return (
        <h1 {...props} className={className || defaultStyle}>
            {text}
        </h1>
    )
}
