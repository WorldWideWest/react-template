export default class Path {
    static readonly register = 'api/Identity/register'
    static readonly confirmEmailResend = 'api/Identity/verify/resend'
    static readonly confirmEmail = 'api/Identity/verify'
    static readonly passwordForgot = 'api/Identity/password/forgot'
    static readonly passwordVerify = 'api/Identity/password/verify'
    static readonly passwordChange = 'api/Identity/password/change'
    static readonly deleteUser = 'api/Identity/delete'
}
