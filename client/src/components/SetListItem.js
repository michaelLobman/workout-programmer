import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, counter, setCounter }){
    const [completeBoolean, setCompleteBoolean] = useState(false)
    const { reps, percentage } = set

    const liftingWeight = Math.round(wMax * percentage / 5) * 5
    const variant = completeBoolean ? 'success' : 'outline-success'

    function handleClick(){
        setCompleteBoolean(!completeBoolean)
        setCounter(counter  => counter + 1)
    }

    return (
        <ListGroup.Item>
            {reps} reps @ {liftingWeight} pounds
            <Button 
                className='set-button'
                disabled={completeBoolean}
                variant={variant} 
                onClick={handleClick}
            >
                Complete
            </Button>
        </ListGroup.Item>

    )
}

export default SetListItem;