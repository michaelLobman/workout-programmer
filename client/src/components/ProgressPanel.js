import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

import AdvanceBtn from './AdvanceBtn';

function ProgressPanel({ user, setUser }){

    const now = Math.round(user.week.num / 20 * 100);

    return(
        <div id='progress-panel-div'>
            <h4>Your Progress:</h4>
            <p>Week: {user.week.num} | Phase: {user.week.phase}</p>
            <ProgressBar animated variant='success' label={`${now}%`} now={now} />
            <AdvanceBtn user={user} setUser={setUser} />
        </div>

    )
}

export default ProgressPanel;