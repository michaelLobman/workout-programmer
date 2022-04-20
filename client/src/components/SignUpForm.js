import { useState } from 'react';

import ExerciseForm from './ExerciseForm';
import Intro from './Intro';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function SignUpForm({ onSignUp }){
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    // const [sReps, setSReps] = useState(0);
    // const [sWeight, setSWeight] = useState(0);
    // const [bReps, setBReps] = useState(0);
    // const [bWeight, setBWeight] = useState(0);
    // const [dReps, setDReps] = useState(0);
    // const [dWeight, setDWeight] = useState(0);
    // const [mReps, setMReps] = useState(0);
    // const [mWeight, setMWeight] = useState(0);

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

        console.log(exerciseArray)


        const user = {
            full_name: fullName,
            username,
            password,
            password_confirmation: passwordConf
            
        }

        // fetch('/signup', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(r => {
        //         if (r.ok){
        //             r.json().then(user => onSignUp(user));
        //         } else {
        //             r.json().then(error => setErrors(error.errors))
        //         }
        //     })
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
                    {renderExForms}
                    {/* <h3>Squat</h3>
                    <Form.Group className='form-group'>
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                        type="number"
                        value={sReps}
                        onChange={(e => setSReps(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="number"
                            value={sWeight}
                            onChange={(e => setSWeight(e.target.value))}
                        />
                    </Form.Group> */}
                    {/* <h3>Bench Press</h3>
                    <Form.Group className='form-group'>
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                        type="number"
                        value={bReps}
                        onChange={(e => setBReps(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="number"
                            value={bWeight}
                            onChange={(e => setBWeight(e.target.value))}
                        />
                    </Form.Group>
                    <h3>Deadlift</h3>
                    <Form.Group className='form-group'>
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                        type="number"
                        value={dReps}
                        onChange={(e => setDReps(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="number"
                            value={dWeight}
                            onChange={(e => setDWeight(e.target.value))}
                        />
                    </Form.Group>
                    <h3>Military Press</h3>
                    <Form.Group className='form-group'>
                        <Form.Label>Reps</Form.Label>
                        <Form.Control
                        type="number"
                        value={mReps}
                        onChange={(e => setMReps(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="number"
                            value={mWeight}
                            onChange={(e => setMWeight(e.target.value))}
                        />
                    </Form.Group> */}
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