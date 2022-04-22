import Container from 'react-bootstrap/Container';

function Intro(){
    return (
        <Container id='intro-container'>
            <h3>Welcome to the Workout Programmer.</h3>
            <p>
                Based on the concepts developed in Jim Wendler's 5-3-1 program,
                the workout plan centers around four main compound movements:
            </p>
                <ul>
                    <li>Squat</li>
                    <li>Bench Press</li>
                    <li>Deadlift</li>
                    <li>Military Press</li>
                </ul>
            <p>
                The program consists of five four-week phases with specific rep/weight
                combinations based on your one rep maximum for each of the four main lifts.
            </p>
            <p>
                Enter your information below to get started.
            </p>
        </Container>
    )
}

export default Intro;