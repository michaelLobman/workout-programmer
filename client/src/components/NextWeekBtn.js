import Button from 'react-bootstrap/Button';

function NextWeekBtn({ user, setUser }){
    
    function handleClick(){

        fetch(`/users/${user.id}/next_week`)
            .then(r => r.json())
            .then(user => setUser(user))

        console.log(user.progressions.first)
    }

    return (
        <Button 
            onClick={handleClick} 
            variant="outline-primary"
        >
            Continue to Week {user.current_week + 1}
        </Button>
    )
}

export default NextWeekBtn;