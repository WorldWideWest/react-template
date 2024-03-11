import Endpoint from '../../constants/identity/paths'
import instance from '../axios'
import { Result } from '../interface'
import {
    PasswordChangeRequest,
    PasswordForgotRequest,
    RegisterUserRequest,
    EmailVerificationResendRequest,
    PassworResetRequest,
    EmailVerificationRequest,
} from './interface'

const registerUserAsync = async (
    request: RegisterUserRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Endpoint.register,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const resendVerificationAsync = async (
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

const verifyAsync = async (
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

const forgotPasswordAsync = async (
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

const resetPasswordAsync = async (
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

const changePasswordAsync = async (
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

const deactivateAsync = async (): Promise<Result<object>> => {
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
    registerUserAsync,
    resendVerificationAsync,
    verifyAsync,
    forgotPasswordAsync,
    resetPasswordAsync,
    changePasswordAsync,
    deactivateAsync,
}
