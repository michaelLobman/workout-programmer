import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressPanel({ user }){

    const now = Math.round(user.current_week / 20 * 100);

    return(
        // <div id='progress-panel-div'>
        <Container id='progress-panel-container'>
            <h4>Your Progress:</h4>
            <p>Week: {user.current_week} | Phase: {user.phase}</p>
            <ProgressBar animated variant='success' label={`${now}%`} now={now} />
        </Container>

    )
}

export default ProgressPanel;