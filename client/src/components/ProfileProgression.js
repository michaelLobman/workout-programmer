import ListGroup from 'react-bootstrap/ListGroup';

function ProfileProgression({ progression }){

	const {baseline_max: baselineMax, current_max: currentMax, exercise } = progression

	return (
		<ListGroup.Item variant="danger">{exercise}: Current Max = {currentMax}</ListGroup.Item>
		)
}

export default ProfileProgression;