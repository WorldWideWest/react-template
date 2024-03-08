import '../../../App.css'
import { GoogleIcon } from '../../../assets/svg/google'
import { userManager } from '../../../oidc'
import {
    ContinueWithIdentityProvider,
    PrimaryButton,
} from '../../shared/Button'
import { InputField } from '../../shared/Input'

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="xl:max-w-md l:max-w-md md:max-w-md sm:max-w-1/2 xs:max-w-1/2">
                <form className="flex flex-col flex-wrap items-left text-left gap-4">
                    <InputField
                        isError={false}
                        placeholder="Email"
                        type="email"
                    />
                    <InputField
                        isError={false}
                        placeholder="Password"
                        type="password"
                    />

                    <PrimaryButton text="Login" isLoading={false} />
                </form>
                <p className="text-center text-secondary-normal text-md py-2 px-1">
                    Don't have an account?{'  '}
                    <a
                        className="text-md text-primary-normal hover:underline hover:cursor-pointer"
                        onClick={() => {
                            // navigate('/signup')
                        }}
                    >
                        SignUp
                    </a>
                </p>

                <div className="flex items-center justify-center py-5">
                    <span className="bg-secondary-light-hover h-px w-full" />
                    <span className="px-3 text-secondary-normal">Or</span>
                    <span className="bg-secondary-light-hover h-px w-full" />
                </div>

                <div className="flex flex-col flex-wrap items-left max-w-full text-left gap-4 mb-4 mt-4">
                    <ContinueWithIdentityProvider
                        text="Continue with Google"
                        icon={<GoogleIcon />}
                        // onClick={() => continueWithGoogle()}
                        isLoading={
                            false
                            // tokenStore.isLoading && isGoogleLoginTriggered
                        }
                    />
                </div>
            </div>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button
                onClick={async () =>
                    console.log(await userManager.signinRedirect())
                }
            >
                Authenticate
            </button> */}
        </div>
    )
}

export default Home
