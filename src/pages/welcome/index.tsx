import { userManager } from '../../oidc';
import { useEffect, useState } from 'react';
import { User } from 'oidc-client-ts';

function Welcome() {

    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        userManager.getUser().then(data => setUser(data))
    })

  return (
    <div>
        Welcome {user?.profile.given_name} {user?.profile.family_name} your email is {user?.profile.name}
    </div>
  );
}

export default Welcome;
