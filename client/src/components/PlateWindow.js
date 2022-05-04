import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function PlateWindow({ plates }){

    const fortyFive = plates[45] ? <Dropdown.Item>45 lb: {plates[45]}</Dropdown.Item>: null
    const thirtyFive = plates[35] ? <Dropdown.Item>35 lb: {plates[35]}</Dropdown.Item> : null
    const twentyFive = plates[25] ? <Dropdown.Item>25 lb: {plates[25]}</Dropdown.Item>: null
    const ten = plates[10] ? <Dropdown.Item>10 lb: {plates[10]}</Dropdown.Item>: null
    const five = plates[5] ? <Dropdown.Item>5lb: {plates[5]}</Dropdown.Item>: null
    const twoHalf = plates[2.5] ? <Dropdown.Item>2.5 lb: {plates[2.5]}</Dropdown.Item> : null


    return(
        <DropdownButton variant="danger" className="plates-dropdown" title="View Plates / Side">
            {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
        </DropdownButton>
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