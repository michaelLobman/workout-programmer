import { useState } from 'react';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Login({ setUser }){

    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
            { showLogin ? (
                <>
                    <LoginForm onLogin={setUser} />
                    <Container className='show-container'>
                        <Button 
                            type='button' 
                            variant='info' 
                            onClick={(() => setShowLogin(!showLogin))}
                        >
                            Sign Up 
                        </Button>
                    </Container>
                </>
            ): (
                <>
                    <SignUpForm onSignUp={setUser} />
                    <Container className='show-container'>
                        <Button 
                            type='button'
                            variant='info'
                            onClick={(() => setShowLogin(!showLogin))}
                        >
                            Login
                        </Button>
                    </Container>
                </>
            )}
        </div>
    )
}

export default Login;