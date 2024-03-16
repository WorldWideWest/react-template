import { AxiosError } from 'axios'
import { Result } from '../../../api/interface'
import { EmailVerificationRequest } from '../../../api/identity/interface'
import { Identity } from '../../../api/identity'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingIndicator from '../../shared/LoadingIndicator'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { HeadingOne } from '../../shared/Heading'

const EmailVerificationPage = () => {
    const url = new URLSearchParams(window.location.search)
    const email = url.get('email') || ''
    const token = url.get('token') || ''

    const {
        isSuccess,
        isPending,
        mutate: emailVerificationMutation,
    } = useMutation<Result<object>, AxiosError, EmailVerificationRequest>({
        mutationFn: Identity.emailVerificationAsync,
    })

    useEffect(() => {
        emailVerificationMutation({ email, token })
    }, [emailVerificationMutation])

    if (isPending)
        return (
            <div className='flex flex-col items-center justify-center min-h-screen text-secondary-normal-active'>
                <HeadingOne
                    text='Email Verification in Progress'
                    textStyle='text-4xl font-bold text-center text-secondary-normal'
                />

                <LoadingIndicator />
            </div>
        )

    if (isSuccess)
        return (
            <div className='flex flex-col text-center items-center justify-center min-h-screen gap-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24'>
                <HeadingOne
                    text='Email verification Successed!'
                    textStyle='text-4xl font-bold text-center text-secondary-normal'
                />

                <FontAwesomeIcon
                    icon={faCircleCheck}
                    className='text-white text-success-normal w-8 h-8 p-1 rounded-full'
                />
            </div>
        )

    return (
        <div className='flex flex-col text-center items-center justify-center min-h-screen gap-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24'>
            <HeadingOne
                text='Email verification Failed!'
                textStyle='text-4xl font-bold text-center text-secondary-normal'
            />

            <FontAwesomeIcon
                icon={faCircleXmark}
                className='text-white text-danger-normal w-8 h-8 p-1 rounded-full'
            />
        </div>
    )
}

export default EmailVerificationPage
