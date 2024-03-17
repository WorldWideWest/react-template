import { useForm, SubmitHandler } from 'react-hook-form'
import { GoogleIcon } from '../../../assets/svg/google'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    ContinueWithIdentityProvider,
    PrimaryButton,
} from '../../shared/Button'
import { InputField } from '../../shared/Input'
import { ErrorLabel } from '../../shared/ErrorLabel'
import { FormFields, schema } from './form'
import { HeadingOne } from '../../shared/Heading'
import { useNavigate } from 'react-router-dom'
import { FormWrapper } from '../../shared/FormWrapper'
import { useMutation, useQuery } from '@tanstack/react-query'
import IdentityProvider from '../../../api/identityProvider/indxe'

const HomePage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid, isLoading },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'all',
    })

    const navigate = useNavigate()

    const { mutateAsync: authenticateMutationAsync } = useMutation({
        mutationFn: IdentityProvider.resourceOwnerPassword,
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const result = await authenticateMutationAsync({
                username: data.email,
                password: data.password,
                skipUserInfo: false,
            })

            // TODO: Add navigation to welcome page
        } catch (error) {
            setError(
                'root',
                { message: 'Email or Password is not correct' }, // TODO: Refactor this
                { shouldFocus: true }
            )
        }
    }

    return (
        <FormWrapper>
            <HeadingOne text='Welcome back' />
            <form
                className='flex flex-col flex-wrap items-left text-left gap-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col flex-wrap items-left'>
                    <InputField
                        register={register('email')}
                        isError={!!errors.email}
                        placeholder='Email'
                        type='email'
                    />
                    {errors.email && <ErrorLabel text={errors.email.message} />}
                </div>
                <div className='flex flex-col flex-wrap items-left'>
                    <InputField
                        register={register('password')}
                        isError={!!errors.email}
                        placeholder='Password'
                        type='password'
                    />
                    {errors.root && <ErrorLabel text={errors.root.message} />}
                </div>
                <PrimaryButton
                    text='Login'
                    isLoading={isLoading}
                    disabled={!isValid}
                />
            </form>
            <p className='text-center text-secondary-normal text-md py-2 px-1'>
                Don't have an account?{'  '}
                <a
                    className='text-md text-primary-normal hover:underline hover:cursor-pointer'
                    onClick={() => navigate('signup')}
                >
                    SignUp
                </a>
            </p>

            <div className='flex items-center justify-center py-5'>
                <span className='bg-secondary-light-hover h-px w-full' />
                <span className='px-3 text-secondary-normal'>Or</span>
                <span className='bg-secondary-light-hover h-px w-full' />
            </div>

            <div className='flex flex-col flex-wrap items-left max-w-full text-left gap-4 mb-4 mt-4'>
                <ContinueWithIdentityProvider
                    text='Continue with Google'
                    icon={<GoogleIcon />}
                    isLoading={false}
                />
            </div>
        </FormWrapper>
    )
}

export default HomePage
