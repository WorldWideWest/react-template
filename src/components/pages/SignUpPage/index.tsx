import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { HeadingOne } from '../../shared/Heading'
import { InputField } from '../../shared/Input'
import { ErrorLabel } from '../../shared/ErrorLabel'
import { PrimaryButton } from '../../shared/Button'
import { FormFields, schema } from './form'
import { FormWrapper } from '../../shared/FormWrapper'

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'all',
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log('data :>> ', data) // TODO: emit event for calling api
    }

    return (
        <FormWrapper>
            <HeadingOne text='Signup' />
            <form
                className='flex flex-col flex-wrap items-left text-left gap-4 w-auto'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex flex-col flex-wrap items-left'>
                    <InputField
                        register={register('firstName')}
                        isError={!!errors.firstName}
                        placeholder='First Name'
                        type='text'
                    />
                    {errors.firstName && (
                        <ErrorLabel text={errors.firstName?.message} />
                    )}
                </div>

                <div className='flex flex-col flex-wrap items-left'>
                    <InputField
                        register={register('lastName')}
                        isError={!!errors.lastName}
                        placeholder='Last Name'
                        type='text'
                    />
                    {errors.lastName && (
                        <ErrorLabel text={errors.lastName?.message} />
                    )}
                </div>

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
                    type='submit'
                />
            </form>
        </FormWrapper>
    )
}

export default SignUpPage
