import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user, progressions, setProgressions }){
    
    const items = progressions.map(progression => (
        <ExerciseItem 
            key={progression.id} 
            progression={progression} 
            sets={user.ex_sets}
            setProgressions={setProgressions}
            userId={user.id}
        />
    ))

    return (
        <Accordion id='workout-accordion'>
            {items}
        </Accordion>
    )
}

export default WorkoutAccordion;