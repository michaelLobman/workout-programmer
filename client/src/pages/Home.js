import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'

import ProgressPanel from '../components/ProgressPanel';
import WorkoutAccordion from '../components/WorkoutAccordion';


function Home({ user, setUser }){

    const phase = Math.ceil(user.current_week / 4) * 4 / 4

    return (
        <Container id='home-container'>
            <h2 id='workout-h2'>Weekly Workouts</h2>
            <WorkoutAccordion user={user} />
            <ProgressPanel user={user} setUser={setUser} />
        </Container>
    )
}

export default Home;