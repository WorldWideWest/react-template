import Path from '../../constants/identity/paths'
import instance from '../axios'
import { Result } from '../interface'
import {
    ChangePasswordRequest,
    ForgotPasswordRequest,
    RegisterUserRequest,
    ResendVerificationMailRequest,
    ResetPasswordRequest,
    VerifyEmailRequest,
} from './interface'

const registerUserAsync = async (
    request: RegisterUserRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Path.register,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const resendVerificationAsync = async (
    request: ResendVerificationMailRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Path.resendConfirmationEmail,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const verifyAsync = async (
    request: VerifyEmailRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(Path.verify, request)

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const forgotPasswordAsync = async (
    request: ForgotPasswordRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Path.forgotPassword,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const resetPasswordAsync = async (
    request: ResetPasswordRequest
): Promise<Result<object>> => {
    try {
        const result = await instance.post<Result<object>>(
            Path.verifyPassword,
            request
        )

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const changePasswordAsync = async (
    request: ChangePasswordRequest
): Promise<Result<object>> => {
    try {
        // Add token header on implementation
        const result = await instance.put<Result<object>>(Path.changePassword, {
            ...request,
        })

        return result.data
    } catch (error) {
        return Promise.reject(error)
    }
}

const deactivateAsync = async (): Promise<Result<object>> => {
    try {
        // Add token header on implementation
        const result = await instance.delete<Result<object>>(Path.delete)

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
