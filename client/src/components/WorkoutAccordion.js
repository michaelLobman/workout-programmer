import Accordion from 'react-bootstrap/Accordion'
import ExerciseItem from './ExerciseItem';

function WorkoutAccordion({ user }){

    const items = user.progressions.map(progression => (
        <ExerciseItem key={progression.id} progressionObj={progression} sets={user.week_sets} />
    ))

    return (
        <Accordion id='workout-accordion'>
            {items}
        </Accordion>
    )
}

export default WorkoutAccordion;