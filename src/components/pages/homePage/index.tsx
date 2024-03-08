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

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'all',
    })
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log('data :>> ', data)
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='xl:max-w-md l:max-w-md md:max-w-md sm:max-w-1/2 xs:max-w-1/2'>
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
                        {errors.email && (
                            <ErrorLabel text={errors.email?.message} />
                        )}
                    </div>
                    <div className='flex flex-col flex-wrap items-left'>
                        <InputField
                            register={register('password')}
                            isError={!!errors.email}
                            placeholder='Password'
                            type='password'
                        />
                        {errors.password && (
                            <ErrorLabel text={errors.password?.message} />
                        )}
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
                        onClick={() => {}} // TODO: Create signup page
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
            </div>
        </div>
    )
}

export default Home
