import { useState } from 'react';

import ExerciseForm from './ExerciseForm';
import Intro from './Intro';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function SignUpForm({ onSignUp }){
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const [errors, setErrors] = useState([]);

    let exerciseArray = [
        {
            title: 'Squat',
            id: 1
        },
        {
            title: 'Bench Press',
            id: 2
        },
        {
            title: 'Deadlift',
            id: 3
        },
        {
            title: 'Military Press',
            id: 4
        }
    ]

    const renderExForms = exerciseArray.map(exercise => (
        <ExerciseForm exArray={exerciseArray} exercise={exercise} key={exercise.id} />
    ))

    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            full_name: fullName,
            username,
            password,
            password_confirmation: passwordConf,
            exercises: exerciseArray
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
                    r.json().then(user => onSignUp(user, user.progressions));
                } else {
                    r.json().then(error => setErrors(error.errors))
                }
            })
    }

    const renderErrors = errors.map(error => (
        <Alert key={error} variant='danger'>{error}</Alert>
    ))



    return (
        <>
            <Intro />
            <Container>
                <Form id="signup-form" onSubmit={handleSubmit}>
                    <Form.Group className="form-group">
                        <FloatingLabel
                            controlId="floatingName"
                            label="Full Name"
                            className="mb-3"
                        >
                            <Form.Control 
                                className='form-input'
                                type="text" 
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e => setFullName(e.target.value))}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <FloatingLabel
                            controlId="floatingUsername"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control 
                                className='form-input'
                                type="text" 
                                placeholder="Username"
                                value={username}
                                onChange={(e => setUsername(e.target.value))}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <FloatingLabel
                            controlId="floatingPassword"
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
                    <Form.Group className="form-group">
                        <FloatingLabel
                            controlId="floatingPasswordConf"
                            label="Confirm Password"
                            className="mb-3"
                        >
                            <Form.Control 
                                className='form-input'
                                type="password" 
                                placeholder="Confirm Password"
                                value={passwordConf}
                                onChange={(e => setPasswordConf(e.target.value))}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    {renderExForms}
                    <Form.Group className='form-group'>
                        <Button id='continue-btn' type='submit' variant='danger'>Create Account</Button>
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