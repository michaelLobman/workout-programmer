import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user }){

    const items = user.max_weights.map(max => (
        <ExerciseItem user={user} key={max.id} maxObj={max} sets={user.week_sets} />
    ))

    return (
        <Accordion id='workout-accordion'>
            {items}
        </Accordion>
    )
}

export default WorkoutAccordion;