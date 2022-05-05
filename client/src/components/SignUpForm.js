import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ExerciseForm from './ExerciseForm';
import Intro from './Intro';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Nav from 'react-bootstrap/Nav';


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
                    r.json().then(user => onSignUp(user));
                } else {
                    r.json().then(error => setErrors(error.errors))
                }
            })
    }

    const renderErrors = errors.map(error => (
        <Alert key={error} variant='danger'>{error}</Alert>
    ))

    return (

        // removing form groups above exercises, trying to go them over
        <>
            <Intro />
            <Container>
                <Form>
                    <Form.Group className="form-group">
                        <FloatingLabel
                            controlId="floatingInput"
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
                            controlId="floatingInput"
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
                            controlId="floatingInput"
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
                            controlId="floatingInput"
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
                    {/* {renderExForms} */}
                    <Form.Group className='form-group'>
                        {/* <Button id='continue-btn' variant='danger' as={NavLink} to="/squat">
                            Create Account and Continue to Exercises
                        </Button> */}
                        <Button id='continue-btn' type='submit' variant='danger'>Create Account and Continue to Exercises</Button>
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