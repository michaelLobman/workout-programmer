import Button from 'react-bootstrap/Button';

function ReturnBtn({ user, setUser, setProgressions }){
    
    function handleClick(){

        fetch(`/users/${user.id}/previous_week`)
            .then(r => r.json())
            .then(user => {
                setUser(user);
                setProgressions(user.progressions);
        })
    }

    return (
        <Button 
            className='week-button'
            onClick={handleClick} 
            variant="outline-danger"
        >
            Return to Week {user.current_week - 1}
        </Button>
    )
}

export default ReturnBtn;