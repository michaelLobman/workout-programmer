import ProfileProgression from '../components/ProfileProgression';

import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function Profile({ progressions }) {



	const renderedListItems = progressions.map(progression => (
		<ProfileProgression key={progression.id} progression={progression} />
		))
	return (
		/*the problem then is progressions is shared throughout, needs to move 
		to a higher level, the highest level... app */
		/*pass down user through props to display name if this ends up working */
		<div>
{/*			<h2>{user.name}'s Profile</h2>
*/}			<ListGroup>
				{renderedListItems}
			</ListGroup>

		</div>
		)
}
export default Profile;