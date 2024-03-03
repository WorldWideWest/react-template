import { useNavigate } from 'react-router-dom';
import { userManager } from '../../oidc';
import { useEffect } from 'react';

function SignOutRedirect() {
  const navigate = useNavigate()
    useEffect(() => {
        userManager.signoutRedirectCallback().then(data => {
            console.log(data);
            navigate('/')
        });
    })
  return (
    <div className="App">
        Callback for signinout
    </div>
  );
}

export default SignOutRedirect;
