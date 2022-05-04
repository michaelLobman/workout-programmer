import ListGroup from 'react-bootstrap/ListGroup';

function ProfileProgression({ progression }){

	const {baseline_max: baselineMax, current_max, exercise } = progression
	const currentMax = current_max === 0 ? baselineMax : current_max

	return (
		<>
			<ListGroup.Item>{exercise}</ListGroup.Item>
			<ListGroup>
				<ListGroup.Item variant="danger">Starting Max: {baselineMax}</ListGroup.Item>
				<ListGroup.Item variant="success">Current Max: {currentMax}</ListGroup.Item>
			</ListGroup>
		</>
		)
}

export default ProfileProgression;