import { useState } from 'react';

import PlateWindow from './PlateWindow'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SetListItem({ set, completed, setProgressions, id, userId, wP }){

    const [completedReps, setCompletedReps] = useState(1);
    const {weight, plates } = wP
    const { num, reps, week_id: week } = set
    const toggleClass = completed ? 'completed-class' : null
    const amrap = num === 3 && week !== 4 ? '+' : null
    const displayForm = num === 3 && week !== 4 ? (

        <Form.Group 
            as={Row} 
            className="set-form-group"
        >
            <Form.Label id="set-form-label" column>Reps:</Form.Label>
            <Col>
                <Form.Control
                    id="set-form-input"
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={completedReps}
                    onChange={(e => setCompletedReps(e.target.value))}
                />
            </Col>
        </Form.Group>
    ) : null

    function handleSubmit(e){
        e.preventDefault();

        const max = { 
            reps: parseInt(completedReps),
            weight,
        }
        fetch(`/progressions/user/${userId}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(max)

        })
            .then(r => r.json())
            .then(data => setProgressions(data))
    }

    return (
        <ListGroup.Item>
            <h2 className={toggleClass} id="set-text">
                {reps} {amrap} reps @ {weight} <em>lbs</em> 
            </h2>
            <PlateWindow plates={plates} />
            { num === 3 ? (
            <Form id="set-form" onSubmit={handleSubmit}>
                {displayForm}
                <Form.Group className="form-group">
                <Button 
                    id="set-submit" 
                    type="submit" 
                    variant="outline-danger"
                    disabled={completed ? true : false}
                >
                    Complete
                </Button>
                </Form.Group>
            </Form>
            ) : null }
        </ListGroup.Item>
    )
}

export default SetListItem;

