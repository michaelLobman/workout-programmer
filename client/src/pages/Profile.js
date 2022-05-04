import ProfileProgression from '../components/ProfileProgression';
import ProgressPanel from '../components/ProgressPanel';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile({ progressions, user }) {

	const renderedListItems = progressions.map(progression => (
		<ProfileProgression key={progression.id} progression={progression} />
		))
	return (
		<>
			<h2 id="profile-h2">{user.name}'s Profile</h2>

			<Container id='profile-container'>

				<ListGroup id="profile-listgroup">
					{renderedListItems}
				</ListGroup>
				<ProgressPanel user={user} />

			</Container>
		</>
		)
}
export default Profile;