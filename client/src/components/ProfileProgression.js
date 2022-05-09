import { useState } from 'react';

import ProfileEditExForm from './ProfileEditExForm';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProfileProgression({ progression, onEdit, userId }){

	const {baseline_max: baselineMax, current_max: currentMax, exercise } = progression

	const [displayForm, setDisplayForm] = useState(false);
	const maxVariant = currentMax !== baselineMax ? "success" : "danger"

	// conditionally render button, which obviously should be in the next level up

	// will probably need to have the setProgressions? to have it update automatically? Trying to think of the bet
	// way to automatically update it... 

	return (
		<Card 
			className="progression-card"
			bg="danger"
			text="light"
		>
			<Card.Body>
				<Card.Title>{exercise}</Card.Title>
				<ListGroup>
					<ListGroup.Item className="progression-lg-i" variant="info">Starting PR: {baselineMax}</ListGroup.Item>
					<ListGroup.Item className="progression-lg-i" variant={maxVariant}>Current PR: {currentMax}</ListGroup.Item>
				</ListGroup>
				<Button id="edit-button" variant="success" onClick={()=> setDisplayForm(!displayForm)}>Edit Starting PR</Button>
				{displayForm ? <ProfileEditExForm progression={progression} userId={userId} onEdit={onEdit} /> : null}
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