import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import WorkoutAccordion from '../components/WorkoutAccordion';


function Home({ user, setUser}){

    const progress = user.current_week - 1
    const now = progress / 20 * 100

    const workoutAccordions = user.max_weights.map(maxObj => {
        console.log(maxObj)
        return <WorkoutAccordion key={maxObj.id} maxObj={maxObj} />
    })
    return (
        <Container id='home-container'>
            <h1 id='home-h1'>Welcome, {user.name}</h1>
            <h2>You are currently on Week {user.current_week} of the program</h2>
            <ProgressBar animated variant='success' label={`${now}%`} now={now} />
            <h2>Week {user.current_week} workouts:</h2>
                {workoutAccordions}
        </Container>
    )
}

export default Home;