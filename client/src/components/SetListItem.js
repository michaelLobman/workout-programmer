import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, completed, setProgressions, id, userId }){
    const [completeBoolean, setCompleteBoolean] = useState(false)
    const { num, reps, percentage, week_id: week } = set

    const liftingWeight = Math.round(wMax * percentage / 5) * 5
    // const variant = completeBoolean ? 'success' : 'outline-success'
    const amrap = num === 3 && week % 4 !== 0 ? '+' : null

    const variant = completed >= num ? 'success' : 'outline-success'

    function handleClick(e){
        e.preventDefault();
    
        const data = {
            sets_completed: completed + 1
        }
        fetch(`/progressions/user/${userId}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(data => setProgressions(data))
    }

    
    return (
        <ListGroup.Item>
            {reps} {amrap} reps @ {liftingWeight} pounds
            <Button 
                className='set-button'
                disabled={!variant}
                variant={variant} 
                onClick={handleClick}
            >
                Complete
            </Button>
        </ListGroup.Item>

    )
}

export default SetListItem;