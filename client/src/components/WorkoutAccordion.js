import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user }){

    const [progressions, setProgressions] = useState([]);


    // trying to fetch progressions independent of user, that would need to be a function then.

    useEffect(() => {
        fetch(`/progressions/user/${user.id}`)
            .then(r => r.json())
            .then(data => setProgressions(data))
    }, [user])

    
    console.log(user)

    const items = progressions.map(progression => (
        <ExerciseItem 
            key={progression.id} 
            progressionObj={progression} 
            sets={user.week_sets}
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