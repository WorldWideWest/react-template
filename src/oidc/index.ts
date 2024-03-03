import { UserManager } from "oidc-client-ts";

export const userManager = new UserManager({
    client_id: 'google_web',
    client_secret: '44CfU7C7fB0k3oeATDkbzuJqswh3zk',
    redirect_uri: 'http://localhost:3000/signin-redirect',
    post_logout_redirect_uri: 'http://localhost:3000/signout-redirect',
    authority: 'https://localhost',
    response_type: 'code',
    scope: 'openid profile template_update template_read template_write template_delete offline_access',
});
