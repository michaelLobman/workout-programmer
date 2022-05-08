import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PlateWindow({ plates }){

    let renderedPlates; 

    if (plates) {
        const fortyFive = plates[45] ? <ListGroup.Item className="plates-li">45 <i>lb</i>: {plates[45]}</ListGroup.Item> : null
        const thirtyFive = plates[35] ? <ListGroup.Item  className="plates-li">35 <i>lb</i>: {plates[35]}</ListGroup.Item> : null
        const twentyFive = plates[25] ? <ListGroup.Item  className="plates-li">25 <i>lb</i>: {plates[25]}</ListGroup.Item> : null
        const ten = plates[10] ? <ListGroup.Item  className="plates-li">10 <i>lb</i>: {plates[10]}</ListGroup.Item> : null
        const five = plates[5] ? <ListGroup.Item  className="plates-li">5 <i>lb</i>: {plates[5]}</ListGroup.Item> : null
        const twoHalf = plates[2.5] ? <ListGroup.Item  className="plates-li">2.5 <i>lb</i>: {plates[2.5]}</ListGroup.Item> : null

        renderedPlates = (
            <ListGroup>
                {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
            </ListGroup>
        )
    } else {
        renderedPlates = (
            <ListGroup>
                <ListGroup.Item className="plates-li">Empty Barbell</ListGroup.Item>
            </ListGroup>
        )
    }

    const popover = (
        <Popover className="plates-popover">
            <Popover.Body>
                {renderedPlates}
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
            <Button className="plates-btn" variant="danger">View Plates / Side</Button>
        </OverlayTrigger>
    )
}


export default PlateWindow;