import Container from 'react-bootstrap/Container';

function PlateWindow({ plates }){

    const fortyFive = plates[45] ? <li>45 lb: {plates[45]}</li>: null
    const thirtyFive = plates[35] ? <li>35 lb: {plates[35]}</li> : null
    const twentyFive = plates[25] ? <li>25 lb: {plates[25]}</li>: null
    const ten = plates[10] ? <li>10 lb: {plates[10]}</li>: null
    const five = plates[5] ? <li>5lb: {plates[5]}</li>: null
    const twoHalf = plates[2.5] ? <li>2.5 lb: {plates[2.5]}</li> : null


    return(
        <Container>
            <h3 id="plate-h3">Plates per side:</h3>
            <ul id="plate-ul">
                {fortyFive}{thirtyFive}{twentyFive}{ten}{five}{twoHalf}
            </ul>
        </Container>
    )
}


export default PlateWindow;