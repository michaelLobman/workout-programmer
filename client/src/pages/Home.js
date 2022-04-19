import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'

import NextWeekBtn from '../components/NextWeekBtn';
import WorkoutAccordion from '../components/WorkoutAccordion';


function Home({ user, setUser }){

    const progress = user.current_week - 1
    const now = progress / 20 * 100

    return (
        <Container id='home-container'>
            <h1 id='home-h1'>Welcome, {user.name}</h1>
            <h2>You are currently on Week {user.current_week} of the program</h2>
            <h2>Week {user.current_week} workouts:</h2>
            <ProgressBar animated variant='success' label={`${now}%`} now={now} />
            <WorkoutAccordion user={user} />
            <NextWeekBtn user={user} setUser={setUser} />
        </Container>
    )
}

export default Home;