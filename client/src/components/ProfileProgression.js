import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProfileProgression({ progression }){

	const {baseline_max: baselineMax, current_max, exercise } = progression
	const currentMax = current_max > 0 ? current_max : baselineMax;

	const maxVariant = currentMax !== baselineMax ? "success" : "danger"


	return (
		<Card 
			className="progression-card"
			bg="danger"
			text="light"
		>
			<Card.Body>
				<Card.Title>{exercise}</Card.Title>
				<ListGroup>
					<ListGroup.Item className="progression-lg-i" variant="info">Starting Max: {baselineMax}</ListGroup.Item>
					<ListGroup.Item className="progression-lg-i" variant={maxVariant}>Current Max: {currentMax}</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
		// 	<ListGroup.Item>{exercise}</ListGroup.Item>
		// 	<ListGroup>
		// 		<ListGroup.Item variant="danger">Starting Max: {baselineMax}</ListGroup.Item>
		// 		<ListGroup.Item variant="success">Current Max: {currentMax}</ListGroup.Item>
		// 	</ListGroup>
		// </>
		)
}

export default ProfileProgression;