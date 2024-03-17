import { useEffect, useState } from 'react'
import { User } from 'oidc-client-ts'

function Welcome() {
    // const [user, setUser] = useState<User | null>()

    // useEffect(() => {
    //     userManager.getUser().then((data) => setUser(data))
    // })

    return (
        <div>
            {/* Welcome. {user?.profile.given_name} {user?.profile.family_name} your
            email is {user?.profile.name}
            <br />
            <button
                onClick={async () =>
                    await userManager.signoutRedirect({
                        id_token_hint: user?.id_token,
                        state: user?.state,
                    })
                }
            >
                Logout
            </button> */}
        </div>
    )
}

export default Welcome
