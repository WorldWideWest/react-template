export default class Endpoint {
    /** Endpoint for user registration */
    static readonly register = 'api/Identity/register'

    /** Endpoint for resending email confirmation */
    static readonly emailVerificationResend = 'api/Identity/verify/resend'

    /** Endpoint for confirming email */
    static readonly emailConfirmation = 'api/Identity/verify'

    /** Endpoint for initiating password reset (sending the mail) */
    static readonly passwordForgot = 'api/Identity/password/forgot'

    /** Endpoint for reseting the password with a new one */
    static readonly passwordVerify = 'api/Identity/password/verify'

    /** Endpoint for changing password */
    static readonly passwordChange = 'api/Identity/password/change'

    /** Endpoint for deleting user */
    static readonly deleteUser = 'api/Identity/delete'
}
