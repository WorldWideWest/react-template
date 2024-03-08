export default class Path {
    static readonly register = 'api/Identity/register'
    static readonly resendConfirmationEmail = 'api/Identity/verify/resend'
    static readonly verify = 'api/Identity/verify'
    static readonly forgotPassword = 'api/Identity/password/forgot'
    static readonly verifyPassword = 'api/Identity/password/verify'
    static readonly changePassword = 'api/Identity/password/change'
    static readonly delete = 'api/Identity/delete'
}
