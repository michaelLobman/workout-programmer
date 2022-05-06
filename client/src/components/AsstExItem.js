import ListGroup from 'react-bootstrap/ListGroup';

function AsstExItem({ ex }){

    return (
        <ListGroup.Item id="asst-ex-item">
            {ex.title}: {ex.sets} x {ex.reps}
        </ListGroup.Item>
    )
}

export default AsstExItem;