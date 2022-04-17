import { useState } from 'react';

function WorkoutAccordion({ maxObj }){

    const {exercise, max, w_max: wMax, id } = maxObj


    return(
        <p>{exercise} {max} {wMax} {id}</p>
    )
    
}

export default WorkoutAccordion;