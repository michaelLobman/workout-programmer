function ProfileProgression({ progression }){

	const {baseline_max: baselineMax, current_max, exercise } = progression

	const currentMax = current_max === 0 ? baselineMax : current_max



	return (
		<>
			<li>{exercise}</li>
			<ul>
				<li className="profile-list-item" variant="info">{exercise}: Current Max = {currentMax}</li>
			</ul>
		</>
		)
}

export default ProfileProgression;