import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [response, setResponse] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        fetch('/password/reset', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(r => r.json())
            .then(response => setResponse(response.response))
        
    }

    return (
        <Form id="forgot-form" onSubmit={handleSubmit}>
            <Form.Group className="form-group">
                <FloatingLabel
                    controlId="floatingEmail"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control 
                        className='form-input'
                        type="email" 
                        placeholder="Email Address"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className='form-group'>
                <Button className='form-btn' type='submit' variant='danger'>Reset Password</Button>
            </Form.Group>
            {response ? <p>{response}</p>: null}
        </Form>

    )
}

export default ForgotPassword;