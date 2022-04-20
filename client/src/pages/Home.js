import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'

import NextWeekBtn from '../components/NextWeekBtn';
import WorkoutAccordion from '../components/WorkoutAccordion';


function Home({ user, setUser }){

    const now = Math.round(user.current_week / 20 * 100);
    const phase = Math.ceil(user.current_week / 4) * 4 / 4

    return (
        <Container id='home-container'>
            <h1 id='home-h1'>Welcome, {user.name}</h1>
            <h2>You are currently on Week {user.current_week} of Phase {phase} of the program</h2>
            <h2>Week {user.current_week} workouts:</h2>
            <ProgressBar animated variant='success' label={`${now}%`} now={now} />
            <WorkoutAccordion user={user} />
            <NextWeekBtn user={user} setUser={setUser} />
        </Container>
    )
}

export default Home;