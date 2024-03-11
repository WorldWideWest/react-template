import { createAsyncThunk } from '@reduxjs/toolkit'
import { Result } from '../../../api/interface'
import {
    PasswordChangeRequest,
    PasswordForgotRequest,
    RegisterUserRequest,
    EmailVerificationResendRequest,
    PassworResetRequest,
    EmailVerificationRequest,
} from '../../../api/identity/interface'
import Endpoint from '../../../constants/identity/paths'
import { Identity } from '../../../api/identity'
import { AxiosError } from 'axios'

export const registerUserAsync = createAsyncThunk<
    Result<object>,
    RegisterUserRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.register,
    async (
        request: RegisterUserRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.registerUserAsync(request)
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)

export const resendVerificationAsync = createAsyncThunk<
    Result<object>,
    EmailVerificationResendRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.emailVerificationResend,
    async (
        request: EmailVerificationResendRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.resendVerificationAsync(request)
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)

export const verifyAsync = createAsyncThunk<
    Result<object>,
    EmailVerificationRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.emailConfirmation,
    async (
        request: EmailVerificationRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.verifyAsync({ ...request })
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)

export const forgotPasswordAsync = createAsyncThunk<
    Result<object>,
    PasswordForgotRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.passwordForgot,
    async (
        request: PasswordForgotRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.forgotPasswordAsync({ ...request })
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)

export const resetPasswordAsync = createAsyncThunk<
    Result<object>,
    PassworResetRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.passwordVerify,
    async (
        request: PassworResetRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.resetPasswordAsync(request)
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)

export const changePasswordAsync = createAsyncThunk<
    Result<object>,
    PasswordChangeRequest,
    {
        rejectValue: Result<object>
    }
>(
    Endpoint.passwordChange,
    async (
        request: PasswordChangeRequest,
        { rejectWithValue }
    ): Promise<Result<object>> => {
        try {
            return await Identity.changePasswordAsync(request)
        } catch (error) {
            if (!(error instanceof AxiosError)) throw error

            return Promise.reject(
                rejectWithValue(error.response?.data as Result<object>)
            )
        }
    }
)
