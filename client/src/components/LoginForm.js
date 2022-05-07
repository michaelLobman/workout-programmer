import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginForm({ onLogin }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        const user = {
            email,
            password,
        }

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.ok){
                    r.json().then(user => onLogin(user, user.progressions));
                } else {
                    r.json().then(error => setErrors(error.errors))
                }
            })
    }

    const renderErrors = errors.map(error => (
        <Alert key={error} variant='danger'>{error}</Alert>
    ))

    return (
        <Container className='form-container'>
            <Form id='login-form' onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Email"
                        className="mb-3 floater"
                    >
                        <Form.Control 
                            className='form-input'
                            type="text" 
                            placeholder="Email"
                            value={email}
                            onChange={(e => setEmail(e.target.value))}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="form-group">
                    <FloatingLabel
                        controlId="floating-password"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control 
                            className='form-input'
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e => setPassword(e.target.value))}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className='form-group'>
                    <Button className='form-btn' type='submit' variant='danger'>Login</Button>
                </Form.Group>
                <Form.Group className='form-group'>
                    {renderErrors}
                </Form.Group>
            </Form>
        </Container>
        
    )
}

export default LoginForm;