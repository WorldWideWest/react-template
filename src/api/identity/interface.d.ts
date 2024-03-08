export interface RegisterUserRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface ResendVerificationMailRequest {
    email: string
}

export interface VerifyEmailRequest {
    email: string
    token: string
}

export interface ForgotPasswordRequest {
    email: string
}

export interface ResetPasswordRequest {
    email: string
    token: string
    password: string
}

export interface ChangePasswordRequest {
    oldPassword: string
    newPassword: string
}
