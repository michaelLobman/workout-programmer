import { useEffect } from 'react';
import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

import SetListItem from './SetListItem';

function ExerciseItem({ progressionObj, sets, setProgressions, userId }){

    const {exercise, baseline_max, w_max: wMax, id, sets_completed } = progressionObj
    let headerClass = sets_completed ? 'strikethrough' : null
    const numText = sets[2].reps === 1 ? "5 – 3 – 1" : `3 x ${sets[0].reps}`
    const renderSets = sets.map(set => (

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

    return (
        <Accordion.Item eventKey={id}>
            <Form>
                <Accordion.Header className={headerClass}>
                    <h2>{exercise} {numText}</h2>
                </Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {renderSets}
                    </ListGroup>
                </Accordion.Body>
            </Form>
        </Accordion.Item>
    )
}

export default ExerciseItem;