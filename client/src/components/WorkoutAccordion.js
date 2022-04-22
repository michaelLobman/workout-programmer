import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user }){

    const [progressions, setProgressions] = useState([]);

    useEffect(() => {
        fetch(`/progressions/user/${user.id}`)
            .then(r => r.json())
            .then(data => setProgressions(data))
    }, [user])

    // progressions need to, somehow, calculate weight and send it to front end
    // which means that progressions need to be associated with a exset
    // which means a user needs a foreign key of a week instead of current_week...
    // okay, this can be done.
    
    // user.week_sets is breaking the code becasue of the removed method
    // of the same name in the user_serializer
    // console.log(user)
    // console.log(user.week_sets)
    // console.log(progressions)

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