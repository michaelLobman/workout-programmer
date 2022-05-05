import { useState } from 'react';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Login({ onLogin, setUser }){

    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            <NavBar setUser={setUser} setShowLogin={setShowLogin} showLogin={showLogin} />
            { showLogin ? <LoginForm onLogin={onLogin} /> : <SignUpForm onSignUp={onLogin} /> }
        </div>
    )
}

export default Login;