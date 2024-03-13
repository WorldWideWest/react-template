import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import SignUpPage from './components/pages/SignUpPage'
import EmailResendPage from './components/pages/EmailResendPage'
import EmailVerificationPage from './components/pages/EmailVerificationPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/signup' Component={SignUpPage} />
                <Route path='/resend' Component={EmailResendPage} />
                <Route path='/verify' Component={EmailVerificationPage} />
                {/* <Route path='/signin-redirect' Component={SigninRedirect} /> */}
                {/* <Route path='/welcome' Component={Welcome} /> */}
                {/* <Route path='/signout-redirect' Component={SignOutRedirect} /> */}
            </Routes>
        </BrowserRouter>
    )
}
