import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/homePage'
import SigninRedirect from './components/pages/signinRedirect'
import Welcome from './components/pages/welcome'
import SignOutRedirect from './components/pages/sigonutRedirect'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/signin-redirect" Component={SigninRedirect} />
                <Route path="/welcome" Component={Welcome} />
                <Route path="/signout-redirect" Component={SignOutRedirect} />
            </Routes>
        </BrowserRouter>
    )
}
