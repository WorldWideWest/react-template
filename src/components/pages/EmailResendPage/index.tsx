import { useLocation, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../shared/Button'
import { FormWrapper } from '../../shared/FormWrapper'
import { useMutation } from '@tanstack/react-query'
import { Result } from '../../../api/interface'
import { AxiosError } from 'axios'
import { EmailVerificationResendRequest } from '../../../api/identity/interface'
import { Identity } from '../../../api/identity'
import { HeadingOne } from '../../shared/Heading'

const EmailResendPage = () => {
    let { state } = useLocation()
    const navigate = useNavigate()

    const { mutateAsync: emailVerificationMutationAsync } = useMutation<
        Result<object>,
        AxiosError,
        EmailVerificationResendRequest
    >({
        mutationFn: Identity.emailVerificationResendAsync,
    })

    const resendEmail = async () => {
        await emailVerificationMutationAsync({
            email: state.email,
        })
    }

    return (
        <FormWrapper>
            <HeadingOne text='Confirm Account'></HeadingOne>
            <div className='text-center mb-4'>
                <p>
                    If you have any trubble getting the confirmation email
                    please check your{' '}
                    <b className='text-primary-light-active'>Junk</b> or{' '}
                    <a
                        onClick={() => resendEmail()}
                        className='text-sm text-primary-light-active hover:underline hover:cursor-pointer'
                    >
                        <b>Resend Email</b>
                    </a>
                </p>
            </div>
            <PrimaryButton
                text='Continue to Login'
                onClick={() => navigate('/')}
            />
        </FormWrapper>
    )
}

export default EmailResendPage
