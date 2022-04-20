import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function SetListItem({ set, wMax, completed, setProgressions, id, userId }){

    const { num, reps, percentage, week_id: week } = set
    const [ toggleChecked, setToggleChecked ] = useState(false)
    const liftingWeight = Math.round(wMax * percentage / 5) * 5
    const amrap = num === 3 && week % 4 !== 0 ? '+' : null
    const toggleClass = toggleChecked ? 'green-background' : null

    // function handleClick(e){
    //     e.preventDefault();

    //     console.log(`completed currently holds a value of ${completed}`)
    //     const data = {
    //         sets_completed: completed + 1
    //     }
    //     fetch(`/progressions/user/${userId}/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(r => r.json())
    //         .then(data => setProgressions(data))

    //     console.log(`completed currently holds a value of ${completed}`)

    // }

    function handleChange(){
        setToggleChecked(!toggleChecked)
        if (num === 3) {
            console.log('this is the end')
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
                inline
            />
        </ListGroup.Item>

    )
}

export default SetListItem;