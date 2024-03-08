import '../../../App.css'
import { userManager } from '../../../oidc'
import { PrimaryButton } from '../../shared/Button'
import { InputField } from '../../shared/Input'

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form className="flex flex-col flex-wrap items-left text-left gap-4">
                <InputField isError={false} placeholder="Email" type="email" />
                <InputField
                    isError={false}
                    placeholder="Password"
                    type="password"
                />

                <PrimaryButton text="Login" isLoading={false} />
            </form>

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
