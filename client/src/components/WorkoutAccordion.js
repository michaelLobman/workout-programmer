import Accordion from 'react-bootstrap/Accordion'
import WktAccItem from './WktAccItem';

function WorkoutAccordion({ user }){

    const items = user.max_weights.map(max => (
        <WktAccItem key={max.id} maxObj={max} />
    ))

    return (
        <Accordion id='workout-accordion'>
            {items}
        </Accordion>
    )
}

export default WorkoutAccordion;
// function WorkoutAccordion({ maxObj }){

//     const {exercise, max, w_max: wMax, id } = maxObj


//     return(
//         <p>{exercise} {max} {wMax} {id}</p>
//     )
    
// }

// export default WorkoutAccordion;