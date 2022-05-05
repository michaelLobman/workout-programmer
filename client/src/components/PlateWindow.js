
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PlateWindow({ plates }){

    // const fortyFive = plates[45] ? <Dropdown.Item>45 lb: {plates[45]}</Dropdown.Item>: null
    // const thirtyFive = plates[35] ? <Dropdown.Item>35 lb: {plates[35]}</Dropdown.Item> : null
    // const twentyFive = plates[25] ? <Dropdown.Item>25 lb: {plates[25]}</Dropdown.Item>: null
    // const ten = plates[10] ? <Dropdown.Item>10 lb: {plates[10]}</Dropdown.Item>: null
    // const five = plates[5] ? <Dropdown.Item>5lb: {plates[5]}</Dropdown.Item>: null
    // const twoHalf = plates[2.5] ? <Dropdown.Item>2.5 lb: {plates[2.5]}</Dropdown.Item> : null

    // const fortyFive = plates[45] ? <li className="plates-li">45 lb: {plates[45]}</li>: null
    // const thirtyFive = plates[35] ? <li className="plates-li">35 lb: {plates[35]}</li> : null
    // const twentyFive = plates[25] ? <li className="plates-li">25 lb: {plates[25]}</li>: null
    // const ten = plates[10] ? <li className="plates-li">10 lb: {plates[10]}</li>: null
    // const five = plates[5] ? <li className="plates-li">5lb: {plates[5]}</li>: null
    // const twoHalf = plates[2.5] ? <li className="plates-li">2.5 lb: {plates[2.5]}</li> : null

    const fortyFive = plates[45] ? <ListGroup.Item className="plates-li">45 <i>lbs</i>: {plates[45]}</ListGroup.Item >: null
    const thirtyFive = plates[35] ? <ListGroup.Item  className="plates-li">35 <i>lbs</i>: {plates[35]}</ListGroup.Item > : null
    const twentyFive = plates[25] ? <ListGroup.Item  className="plates-li">25 <i>lbs</i>: {plates[25]}</ListGroup.Item >: null
    const ten = plates[10] ? <ListGroup.Item  className="plates-li">10 <i>lbs</i>: {plates[10]}</ListGroup.Item >: null
    const five = plates[5] ? <ListGroup.Item  className="plates-li">5 <i>lbs</i>: {plates[5]}</ListGroup.Item >: null
    const twoHalf = plates[2.5] ? <ListGroup.Item  className="plates-li">2.5 <i>lbs</i>: {plates[2.5]}</ListGroup.Item > : null


    const popover = (
        <Popover className="plates-popover">
            <Popover.Body>
                <ListGroup>
                    {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
                </ListGroup>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="plates-btn" variant="danger">View Plates / Side</Button>
        </OverlayTrigger>

        
        // <DropdownButton variant="danger" className="plates-dropdown" title="View Plates / Side">
        //     {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
        // </DropdownButton>
        // <Dropdown>
        //     <Dropdown.Toggle variant="danger" className="plates-dropdown">
        //         View Plates
        //     </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //         Dro
        //     </Dropdown.Menu>
        // </Dropdown>
        // <Container>
        //     <h3 id="plate-h3">Plates per side:</h3>
        //     <ul id="plate-ul">
        //         {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
        //     </ul>
        // </Container>
    )
}


export default PlateWindow;