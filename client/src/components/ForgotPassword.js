import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ForgotPassword() {

    const [email, setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
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
        </Form>

    )
}

export default ForgotPassword;