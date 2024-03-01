import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import SigninRedirect from './pages/signinRedirect';
import Welcome from './pages/welcome';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/signin-redirect' Component={SigninRedirect}/>
        <Route path='/welcome' Component={Welcome}/>
      </Routes>
    </BrowserRouter>
  );
}

