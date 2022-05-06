import { useEffect } from 'react';
import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

import AsstExItem from './AsstExItem';
import SetListItem from './SetListItem';

function ExerciseItem({ progression, sets, setProgressions, userId }){


    // const [reps, setReps] = useState()

    const {
            exercise, 
            main_ex_id: exId, 
            current_max: currentMax, 
            w_max: wMax, 
            id, 
            sets_completed, 
            weights_plates: wP, 
            asst_exes: asstExes 
        } = progression

    let completed = sets_completed ? 'completed-class' : null
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
            exId={exId}
            currentMax={currentMax}
            wP={wP[set.num - 1]}
        />
    ))

    const renderAsstExes = asstExes.map(ex => (
        <AsstExItem ex={ex} key={ex.id} />
    ))

    const displaySetsOrAsst = completed ? renderAsstExes : renderSets
    const renderText = completed ? <h3 id="asst-ex-h3">Assistant Exercises</h3> : null

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header className={completed}>
                <h2 className="ex-text">{exercise} {numText}</h2>
            </Accordion.Header>
            <Accordion.Body>
                {renderText}
                <ListGroup>
                    {displaySetsOrAsst}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default ExerciseItem;


// return (
//     <Accordion.Item eventKey={id}>
//         <Form>
//             <Accordion.Header className={headerClass}>
//                 <h2 className="ex-text">{exercise} {numText}</h2>
//             </Accordion.Header>
//             <Accordion.Body>
//                 <ListGroup>
//                     {renderSets}
//                 </ListGroup>
//             </Accordion.Body>
//         </Form>
//     </Accordion.Item>
// )