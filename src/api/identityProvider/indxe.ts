import { OidcStandardClaims, User, UserManager } from 'oidc-client-ts'
import { PasswordFlowRequest } from './interface'
import instance from '../axios'

const webClient = new UserManager({
    client_id: process.env.REACT_APP_PASSWORD_FLOW_CLIENT_ID,
    client_secret: process.env.REACT_APP_PASSWORD_FLOW_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/signin-redirect',
    authority: process.env.REACT_APP_API_URI,
    response_type: 'password',
    scope: 'openid profile template_update template_update_profile_password template_read template_write template_delete offline_access',
})

const resourceOwnerPassword = async (
    data: PasswordFlowRequest
): Promise<User> => {
    try {
        return await webClient.signinResourceOwnerCredentials({ ...data })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getUser = async (
    accessToken: string
): Promise<OidcStandardClaims | null> => {
    try {
        return instance.get('https://localhost/connect/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    } catch (error) {
        console.log('error :>> ', error)
        throw error
    }
}

const IdentityProvider = {
    resourceOwnerPassword,
    getUser,
}

export default IdentityProvider
