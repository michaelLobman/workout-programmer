import Button from 'react-bootstrap/Button';

function AdvanceBtn({ user, setUser, setProgressions }){
    
    function handleClick(){

        fetch(`/users/${user.id}/next_week`)
            .then(r => r.json())
            .then(user => {
                setUser(user);
                setProgressions(user.progressions);
        })
    }

    return (
        <Button 
            id='advance-button'
            onClick={handleClick} 
            variant="success"
        >
            Continue to Week {user.current_week + 1}
        </Button>
    )
}

export default AdvanceBtn;