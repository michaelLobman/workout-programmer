import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user, progressions, setProgressions }){

    // now trying to hold the progressions in state at the App.js level
    // hence remove the second fetch request and bifurcation of progressions
    // from user

    // const [progressions, setProgressions] = useState([]);

    // useEffect(() => {
    //     fetch(`/progressions/user/${user.id}`)
    //         .then(r => r.json())
    //         .then(data => setProgressions(data))
    // }, [user])

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