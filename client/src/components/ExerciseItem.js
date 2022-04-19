import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup'

import SetListItem from './SetListItem';

function ExerciseItem({ progressionObj, sets, setProgressions, userId }){
    // const [counter, setCounter] = useState(0)
    // const [progress, setProgress] = useState(progressionObj.sets_completed)

    const {exercise, max, w_max: wMax, id, sets_completed } = progressionObj
    const numText = sets[2].reps === 1 ? "5 – 3 – 1" : `3 x ${sets[0].reps}`
    const renderSets = sets.map(set => (
        // removed counter and setCounter passed as props
        <SetListItem 
            key={set.percentage} 
            completed={sets_completed} 
            id={id}
            set={set} 
            wMax={wMax} 
            setProgressions={setProgressions}
            userId={userId}
        />
    ))
    console.log(`${exercise}: ${id}`)

    // removed counter logic for strikethrough class
    // className={counter >= 3 ? 'strikethrough' : null}
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header className={sets_completed >= 3 ? 'strikethrough' : null}>
                {exercise} {numText}
            </Accordion.Header>
            <Accordion.Body>
                <ListGroup>
                    {renderSets}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default ExerciseItem;