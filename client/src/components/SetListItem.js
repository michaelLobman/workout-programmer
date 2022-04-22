import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, completed, setProgressions, id, userId,  }){

    const [completedReps, setCompletedReps] = useState(1);

    const platesArr = [45, 35, 25, 10, 5, 2.5]

    const { num, reps, percentage, week_id: week } = set
    const weight = Math.round(wMax * percentage / 5) * 5
    const toggleClass = completed ? 'completed-class' : null

    const amrap = num === 3 && week % 4 !== 0 ? '+' : null


    function handleSubmit(e){
        e.preventDefault();

        const max = { 
            reps: parseInt(completedReps),
            weight,
        }

        console.log(max)
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
                {reps} {amrap} reps @ {weight} pounds
            </h2>
            { num === 3 ? (
            <Form id="set-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Reps Performed:</Form.Label>
                    <Form.Control
                        id="set-input"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={completedReps}
                        onChange={(e => setCompletedReps(e.target.value))}
                    />
                </Form.Group>
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

