import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { First } from 'react-bootstrap/esm/PageItem';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import MaxEffortForm from './MaxEffortForm';

function SetListItem({ set, wMax, completed, setProgressions, id, userId, exId, currentMax }){

    const [completedReps, setCompletedReps] = useState(1);

    const { num, reps, percentage, week_id: week } = set
    const [ toggleChecked, setToggleChecked ] = useState(false)
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
        <ListGroup.Item className={toggleClass}>
            <h2 className="set-text">{reps} {amrap} reps @ {weight} pounds</h2>
            { num === 3 ? (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Reps Performed:</Form.Label>
                    <Form.Control
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={completedReps}
                        onChange={(e => setCompletedReps(e.target.value))}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Button type="submit" variant="outline-danger">Complete</Button>
                </Form.Group>
            </Form>
            ) : null }
        </ListGroup.Item>
    )
}

export default SetListItem;








            // {num === 3 ? (
            //     <MaxEffortForm 
            //         setProgressions={setProgressions} 
            //         progressionId={id} 
            //         exId={exId} 
            //         userId={userId} 
            //         currentMax={currentMax} 
            //         weight={liftingWeight}
            //     />   
                
                
        // <ListGroup.Item className={toggleClass}>
        //     <h2 className="set-text">{reps} {amrap} reps @ {liftingWeight} pounds</h2>

        //     {num === 3 ? (
        //         <MaxEffortForm 
        //             setProgressions={setProgressions} 
        //             progressionId={id} 
        //             exId={exId} 
        //             userId={userId} 
        //             currentMax={currentMax} 
        //             weight={liftingWeight}
        //         />
        //     ) : (
        //         null
            // <Form.Check
            //     type="switch"
            //     label="Completed"
            //     checked={toggleChecked}
            //     onChange={(() => setToggleChecked(!toggleChecked))}
            //     disabled={completed}
            //     inline
            //     className="list-form-check"
            // />
//             )}
//         </ListGroup.Item>
//     )
// }




// return (
//     <ListGroup.Item className={toggleClass}>
//         <h2 className="set-text">{reps} {amrap} reps @ {liftingWeight} pounds</h2>
//         <Form.Check
//             type="switch"
//             label="Completed"
//             checked={toggleChecked}
//             onChange={handleChange}
//             disabled={completed}
//             inline
//             className="list-form-check"
//         />
//     </ListGroup.Item>
