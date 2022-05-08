import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup'

import AccessoryExItem from './AccessoryExItem';
import SetListItem from './SetListItem';

function ExerciseItem({ progression, sets, setProgressions, userId }){

    const {
            exercise, 
            main_ex_id: exId, 
            current_max: currentMax, 
            id,
            sets_completed, 
            weights_plates: wP, 
            accessory_exes: accessoryExes 
        } = progression

    let completed = sets_completed ? 'completed-class' : null
    const numText = sets[2].reps === 1 ? "5 – 3 – 1" : `3 x ${sets[0].reps}`
    const renderSets = sets.map(set => (
        
        <SetListItem 
            key={set.id} 
            completed={sets_completed} 
            id={id}
            set={set} 
            setProgressions={setProgressions}
            userId={userId}
            exId={exId}
            currentMax={currentMax}
            wP={wP[set.num - 1]}
        />
    ))

    const renderAccessoryExes = accessoryExes.map(ex => (
        <AccessoryExItem ex={ex} key={ex.id} />
    ))

    const displaySetsOrAccessory = completed ? renderAccessoryExes : renderSets
    const renderText = completed ? <h3 id="accessory-ex-h3">Accessory Exercises</h3> : null

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header className={completed}>
                <h2 className="ex-text">{exercise} {numText}</h2>
            </Accordion.Header>
            <Accordion.Body>
                {renderText}
                <ListGroup>
                    {displaySetsOrAccessory}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default ExerciseItem;