import { useState } from 'react';

import ExerciseForm from '../components/ExerciseForm';
import Intro from '../components/Intro';
import UserInfoForm from '../components/UserInfoForm';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function SignUp({ onSignUp }){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [renderInfoForm, setRenderInfoForm] = useState(true)

    const [errors, setErrors] = useState([]);

    const buttonText = renderInfoForm ? "Continue to Exercise Portion" : "Return to User Information";

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
            email,
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
                    {renderInfoForm ? ( 
                        <UserInfoForm
                            fullName={fullName}
                            setFullName={setFullName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            passwordConf={passwordConf}
                            setPasswordConf={setPasswordConf}
                        />  
                        ) : renderExForms }
                    <Form.Group className='form-group'>
                        <Button 
                            className='form-btn' 
                            variant='danger' 
                            onClick={() => setRenderInfoForm(!renderInfoForm)}
                        >
                            {buttonText}
                        </Button>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        {renderInfoForm ? null : <Button className='form-btn' type='submit' variant='success'>Create Account</Button>}
                    </Form.Group>
                    <Form.Group className='form-group'>
                        {renderErrors}
                    </Form.Group>
                </Form>
            </Container>
        </>
        
    )
}

export default SignUp;