import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, completed, setProgressions, id, userId }){

    const { num, reps, percentage, week_id: week } = set
    const [ toggleChecked, setToggleChecked ] = useState(false)
    const liftingWeight = Math.round(wMax * percentage / 5) * 5
    const amrap = num === 3 && week % 4 !== 0 ? '+' : null
    const toggleClass = completed ? 'completed-class' : null

    function handleChange(){
        setToggleChecked(!toggleChecked)

        if (num === 3) {
            console.log('this is the end')
            fetch(`/progressions/user/${userId}/${id}`)
                .then(r => r.json())
                .then(data => setProgressions(data))
        }
    }

    
    return (
        <ListGroup.Item className={toggleClass}>
            {reps} {amrap} reps @ {liftingWeight} pounds
            <Form.Check
                type="switch"
                label="Completed"
                checked={toggleChecked}
                onChange={handleChange}
                disabled={completed}
                inline
                className="list-form-check"
            />
        </ListGroup.Item>

    )
}

export default SetListItem;