import ListGroup from 'react-bootstrap/ListGroup';

function AccessoryExItem({ ex }){

    return (
        <ListGroup.Item id="accessory-ex-item">
            {ex.title}: {ex.sets} x {ex.reps}
        </ListGroup.Item>
    )
}

export default AccessoryExItem;