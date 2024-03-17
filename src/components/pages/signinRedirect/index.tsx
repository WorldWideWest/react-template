import { useNavigate } from 'react-router-dom'
// import { userManager } from '../../../oidc'
import { useEffect } from 'react'

function SigninRedirect() {
    const navigate = useNavigate()
    // useEffect(() => {
    //     userManager.signinRedirectCallback().then((data) => {
    //         console.log(data)
    //         navigate('/welcome')
    //     })
    // })
    return <div className='App'></div>
}

export default SigninRedirect
