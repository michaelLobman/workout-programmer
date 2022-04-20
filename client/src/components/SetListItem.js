import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, completed, setProgressions, id, userId }){

    const { num, reps, percentage, week_id: week } = set
    const [ toggleChecked, setToggleChecked ] = useState(false)
    const liftingWeight = Math.round(wMax * percentage / 5) * 5
    const amrap = num === 3 && week % 4 !== 0 ? '+' : null
    const toggleClass = completed ? 'green-background' : null

    function handleChange(){
        if (num === 3) {
            setToggleChecked(!toggleChecked)
            console.log('this is the end')
            fetch(`/progressions/user/${userId}/${id}`)
                .then(r => r.json())
                .then(data => setProgressions(data))
        } else {
            setToggleChecked(!toggleChecked)

        }
    }

    
    return (
        <ListGroup.Item className={toggleClass}>
            {reps} {amrap} reps @ {liftingWeight} pounds
            <Form.Check
                type="switch"
                label='Completed'
                checked={toggleChecked}
                onChange={handleChange}
                disabled={!!completed}
                inline
            />
        </ListGroup.Item>

    )
}

export default SetListItem;