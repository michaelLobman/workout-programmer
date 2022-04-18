import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup'

import SetListItem from './SetListItem';

function ExerciseItem({ maxObj, sets }){
    const [counter, setCounter] = useState(0)

    const {exercise, max, w_max: wMax, id } = maxObj
    const numText = sets[2].reps === 1 ? "5 – 3 – 1" : `3 x ${sets[0].reps}`
    const renderSets = sets.map(set => (
        <SetListItem key={set.percentage} set={set} wMax={wMax} counter={counter} setCounter={setCounter} />
    ))

    console.log(`${exercise}: ${id}`)

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header className={counter >= 3 ? 'strikethrough' : null}>
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