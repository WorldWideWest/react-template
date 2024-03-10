import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SigninRedirect from './components/pages/signinRedirect'
import Welcome from './components/pages/welcome'
import SignOutRedirect from './components/pages/sigonutRedirect'
import HomePage from './components/pages/HomePage'
import SignUpPage from './components/pages/SignUpPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/signup' Component={SignUpPage} />
                <Route path='/signin-redirect' Component={SigninRedirect} />
                <Route path='/welcome' Component={Welcome} />
                <Route path='/signout-redirect' Component={SignOutRedirect} />
            </Routes>
        </BrowserRouter>
    )
}
