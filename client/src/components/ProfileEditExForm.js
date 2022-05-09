import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProfileEditExForm({ progression, onEdit, userId }){

    const [weight, setWeight] = useState(100);
	const [reps, setReps] = useState(1);

    function handleSubmit(e){
        e.preventDefault();
        const progressionObj = {
            weight,
            reps
        }

        fetch(`/progressions/user/${userId}/edit_baseline/${progression.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(progressionObj)
        })
            .then(r => r.json())
            .then(progressions => onEdit(progressions))
    }

    return (
        <Form id="edit-progression-form" onSubmit={handleSubmit}>
            <Form.Group 
                className="ex-form-group"
                controlId="edit-weight"
            >
                <Form.Label className="edit-ex-label">Weight:</Form.Label>
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
                controlId="edit-reps"
            >
                <Form.Label className="edit-ex-label">Reps:</Form.Label>
                <Form.Control
                    className="ex-input reps-input"
                    type="number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={reps}
                    onChange={(e => setReps(e.target.value))}
                />
            </Form.Group>
            <Form.Group className="form-group">
                <Button type="submit" variant="success">Submit Changes</Button>
            </Form.Group>
        </Form>
    )
}

export default ProfileEditExForm;