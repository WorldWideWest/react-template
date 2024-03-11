export interface RegisterUserRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface EmailVerificationResendRequest {
    email: string
}

export interface EmailVerificationRequest {
    email: string
    token: string
}

export interface PasswordForgotRequest {
    email: string
}

export interface PassworResetRequest {
    email: string
    token: string
    password: string
}

export interface PasswordChangeRequest {
    oldPassword: string
    newPassword: string
}
