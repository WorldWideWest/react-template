import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SignOutRedirect() {
  const navigate = useNavigate()
    useEffect(() => {
            navigate('/')
    })
  return (
    <div className="App">
        Callback for signinout
    </div>
  );
}

export default SignOutRedirect;
