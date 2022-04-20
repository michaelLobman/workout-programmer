import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function ExerciseForm({ exercise, exArray }){

    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(100);

    let index = exArray.findIndex(item => item.id === exercise.id)
    exArray[index].weight = weight
    exArray[index].reps = reps


    return(
        <>
            <h3>{exercise.title}</h3>
            <Form.Group className='form-group'>
                <Form.Label>Weight</Form.Label>
                <Form.Control
                    type="number"
                    value={weight}
                    onChange={(e => setWeight(e.target.value))}
                />
            </Form.Group>
            <Form.Group className='form-group'>
                <Form.Label>Reps</Form.Label>
                <Form.Control
                type="number"
                value={reps}
                onChange={(e => setReps(e.target.value))}
                />
            </Form.Group>
        </>
    )
}

export default ExerciseForm;