import ProfileProgression from '../components/ProfileProgression';
import ProgressPanel from '../components/ProgressPanel';

import Container from 'react-bootstrap/Container';

function Profile({ progressions, user }) {



	const renderedListItems = progressions.map(progression => (
		<ProfileProgression key={progression.id} progression={progression} />
		))
	return (
		<Container>
			<h2 id="profile-h2">{user.name}'s Profile</h2>
			<ul id="profile-listgroup">
				{renderedListItems}
			</ul>
		<ProgressPanel 
			user={user} 
        />

		</Container>
		)
}
export default Profile;