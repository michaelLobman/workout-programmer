import { useState } from 'react';

import Intro from './Intro';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function SignUpForm({ onSignUp }){
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault();

        const user = {
            full_name: fullName,
            username,
            password,
            password_confirmation: passwordConf
        }

        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok){
                    r.json().then(user => onSignUp(user));
                } else {
                    r.json().then(error => setErrors(error.errors))
                }
            })
    }

    const renderErrors = errors.map(error => (
        <Alert key={error} variant='danger'>{error}</Alert>
    ))

    return(
        <>
            <Intro />
            <Container className='form-container'>
                <Form id='signup-form' onSubmit={handleSubmit}>
                    <Form.Group className='form-group'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type='text'
                            value={fullName}
                            onChange={(e => setFullName(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e => setUsername(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={password}
                            onChange={(e => setPassword(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={passwordConf}
                            onChange={(e => setPasswordConf(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Button type='submit' variant='danger'>Submit</Button>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        {renderErrors}
                    </Form.Group>
                </Form>
            </Container>
        </>
        
    )
}

export default SignUpForm;