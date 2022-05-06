import ProfileProgression from '../components/ProfileProgression';
import ProgressPanel from '../components/ProgressPanel';

import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile({ progressions, user }) {

	const renderedProgressions = progressions.map(progression => (
		<ProfileProgression key={progression.id} progression={progression} />
		))
	return (
		<>
			<ProgressPanel user={user} />
			<h3 id="profile-h3">Exercise Progressions and Personal Records (PRs)</h3>
			<CardGroup id="profile-card-group">
				{renderedProgressions}
			</CardGroup>
		</>
		)
}
export default Profile;