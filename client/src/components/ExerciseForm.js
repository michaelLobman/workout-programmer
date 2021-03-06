import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

function ExerciseForm({ exercise, exArray }){

    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(100);
    const [include, setInclude] = useState(true);

    let index = exArray.findIndex(item => item.id === exercise.id)
    exArray[index].weight = parseInt(weight);
    exArray[index].reps = parseInt(reps);
    exArray[index].include = include;

    return (
        <Container className="ex-form-container">
            <h3 id="ex-form-h3">{exercise.title}</h3>
            <Form.Group className="checkbox-group">
                <Form.Check
                    className="ex-checkbox"
                    type="checkbox"
                    label="Include in Workout"
                    default="checked"
                    checked={include}
                    onChange={() => setInclude(!include)}
                />
            </Form.Group>
            <Form.Group 
                className="ex-form-group"
                controlId={`formWeight${exercise.title}`}
            >
                <Form.Label className="ex-label">Weight:</Form.Label>
                    <Form.Control
                        className="ex-input weight-input"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={weight}
                        onChange={(e => setWeight(e.target.value))}
                    />
            </Form.Group>
            <Form.Group 
                className="ex-form-group"
                controlId={`formReps${exercise.title}`}
            >
                <Form.Label className="ex-label">Reps:</Form.Label>
                <Form.Control
                    className="ex-input reps-input"
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={reps}
                    onChange={(e => setReps(e.target.value))}
                />
            </Form.Group>
            {/* <Form.Group className="checkbox-group">
                <Form.Check
                    className="ex-checkbox"
                    type="checkbox"
                    label="Include in Workout"
                    default="checked"
                    checked={include}
                    onChange={() => setInclude(!include)}
                />
            </Form.Group>
            <Form.Group 
                as={Row} 
                className="ex-form-group"
                controlId={`formWeight${exercise.title}`}
            >
                <Form.Label className="ex-label"column xs={2} sm={2}>Weight:</Form.Label>
                <Col>
                    <Form.Control
                        className="ex-input weight-input"
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
                <Form.Label className="ex-label" column xs={2} sm={2}>Reps:</Form.Label>
                <Col>
                    <Form.Control
                        className="ex-input reps-input"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={reps}
                        onChange={(e => setReps(e.target.value))}
                    />
                </Col>
            </Form.Group> */}
        </Container>
    )
}

export default ExerciseForm;