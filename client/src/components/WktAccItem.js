import Accordion from 'react-bootstrap/Accordion';

function WktAccItem({ maxObj }){
    const {exercise, max, w_max: wMax, id } = maxObj

    return(
        <Accordion.Item eventKey="0">
            <Accordion.Header>{exercise}</Accordion.Header>
        </Accordion.Item>
    )
}

export default WktAccItem;