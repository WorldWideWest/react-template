import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { HeadingOne } from '../../shared/Heading'
import { InputField } from '../../shared/Input'
import { ErrorLabel } from '../../shared/ErrorLabel'
import { PrimaryButton } from '../../shared/Button'
import { FormFields, schema } from './form'
import { FormWrapper } from '../../shared/FormWrapper'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Identity } from '../../../api/identity'
import { Result } from '../../../api/interface'
import { SignUpRequest } from '../../../api/identity/interface'
import { AxiosError } from 'axios'
import {
    findUserAlreadyExistsError,
    toResult,
    toUserAlreadyExistsErrorObject,
} from '../../../utils'

const SignUpPage = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid, isLoading },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'all',
    })

    const { mutateAsync: signUpMutationAsync } = useMutation<
        Result<object>,
        AxiosError,
        SignUpRequest
    >({
        mutationFn: Identity.signUpAsync,
    })

    const onSubmit: SubmitHandler<FormFields> = async (request) => {
        try {
            const result = await signUpMutationAsync({ ...request })
            if (result.succeeded) navigate('/')
        } catch (error) {
            const errorObject = toUserAlreadyExistsErrorObject(error)
            setError('email', errorObject.error, errorObject.options)
        }
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
                    text='SignUp'
                    isLoading={isLoading}
                    disabled={!isValid}
                    type='submit'
                />
            </form>
        </FormWrapper>
    )
}

export default SignUpPage
