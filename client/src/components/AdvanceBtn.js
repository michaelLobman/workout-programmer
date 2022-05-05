import Button from 'react-bootstrap/Button';

function AdvanceBtn({ user, setUser, setProgressions }){

    const btnText = user.current_week === 20 ? "Restart Program with Updated PRs" : `Continue to Week ${user.current_week + 1}`
    
    function handleClick(){

        if (user.current_week === 20) {

            fetch(`/users/${user.id}/restart`)
                .then(r => r.json())
                .then(user => {
                    setUser(user);
                    setProgressions(user.progressions)
                })
        } else {
            fetch(`/users/${user.id}/next_week`)
                .then(r => r.json())
                .then(user => {
                    setUser(user);
                    setProgressions(user.progressions);
        })
        }
    }

    return (
        <Button 
            className='week-button'
            onClick={handleClick} 
            variant="success"
        >
            {btnText}
        </Button>
    )
}

export default AdvanceBtn;