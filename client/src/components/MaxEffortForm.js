import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function MaxEffortForm({ progressionId, setProgressions, exId, userId, currentMax, weight}){

    const [reps, setReps] = useState(1);

    function handleSubmit(e){
        e.preventDefault();

        const max = { 
            reps,
            weight,
        }

        console.log(max)
        // fetch(`/progressions/user/${userId}/${progressionId}`)
        //     .then(r => r.json())
        //     .then(data => setProgressions(data))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
                <Form.Label>Reps Performed:</Form.Label>
                <Form.Control
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={reps}
                    onChange={(e => setReps(e.target.value))}
                />
            </Form.Group>
            <Form.Group className="form-group">
                <Button type="submit" variant="outline-danger">Complete</Button>
            </Form.Group>
        </Form>

    )
}

export default MaxEffortForm;