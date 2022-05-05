import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState } from 'react';

function ExerciseForm({ exercise, exArray }){

    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(100);

    let index = exArray.findIndex(item => item.id === exercise.id)
    exArray[index].weight = parseInt(weight);
    exArray[index].reps = parseInt(reps);

    return (
        <>
            <h3 id="ex-form-h3">{exercise.title}</h3>
            <Form.Group 
                as={Row} 
                className="ex-form-group"
                controlId={`formWeight${exercise.title}`}
            >
                <Form.Label column sm={2}>Weight:</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        className="ex-input"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={weight}
                        onChange={(e => setWeight(e.target.value))}
                    />
                </Col>
            </Form.Group>
            <Form.Group 
                as={Row} 
                className="ex-form-group"
                controlId={`formReps${exercise.title}`}
            >
                <Form.Label column sm={2}>Reps:</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        className="ex-input"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={reps}
                        onChange={(e => setReps(e.target.value))}
                    />
                </Col>
            </Form.Group>
        </>
    )
}

export default ExerciseForm;