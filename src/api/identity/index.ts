import { AxiosError } from 'axios'
import Endpoint from '../../constants/identity/paths'
import instance from '../axios'
import { Result } from '../interface'
import {
    PasswordChangeRequest,
    PasswordForgotRequest,
    SignUpRequest,
    EmailVerificationResendRequest,
    PassworResetRequest,
    EmailVerificationRequest,
} from './interface'

/**
 * Create new User.
 * @param {SignUpRequest} request The sign-up request object.
 * @returns {Promise<Result<object>>} A promise that resolves to the result object.
 */
const signUpAsync = async (request: SignUpRequest): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.signUp,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const emailVerificationResendAsync = async (
    request: EmailVerificationResendRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.emailVerificationResend,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const emailVerificationAsync = async (
    request: EmailVerificationRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.emailConfirmation,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const passwordForgotAsync = async (
    request: PasswordForgotRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.passwordForgot,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const passwordResetAsync = async (
    request: PassworResetRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.passwordVerify,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const passwordChangeAsync = async (
    request: PasswordChangeRequest
): Promise<Result<object>> => {
    try {
        // Add token header on implementation
        const result = await instance.put<Result<object>>(
            Endpoint.passwordChange,
            {
                ...request,
            }
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const deleteAsync = async (): Promise<Result<object>> => {
    try {
        // Add token header on implementation
        const result = await instance.delete<Result<object>>(
            Endpoint.deleteUser
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

export const Identity = {
    signUpAsync,
    emailVerificationResendAsync,
    emailVerificationAsync,
    passwordForgotAsync,
    passwordResetAsync,
    passwordChangeAsync,
    deleteAsync,
}
