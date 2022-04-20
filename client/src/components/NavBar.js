import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'

import { NavLink } from 'react-router-dom';


function NavBar({ user, setUser }){


    const renderText = user ?  <Navbar.Text>Welcome, {user.name}</Navbar.Text> : null
    const renderButton = user ? <Button variant="outline-danger" onClick={handleClick}>Logout</Button> : null
        


    function handleClick(){
        console.log('consider it handled');
        fetch('/logout', {
            method: "DELETE"
        })
            .then(r => {
                if (r.ok){
                    setUser(null)
                }
            });
    }
    return (
        <Navbar bg='dark' variant='dark'  >
            <Container id='navbar-container'>
                <Navbar.Brand as={NavLink} to="/">Workout Programmer</Navbar.Brand>
                {renderText}
                {/* <Navbar.Text>
                    Week: {user.current_week} | Phase: {user.phase}
                </Navbar.Text> */}
                {/* <Container>
                    <ProgressBar animated variant='success' label={`${now}%`} now={now} />
                </Container> */}
                {renderButton}
                {/* <Button variant="outline-danger" onClick={handleClick}>Logout</Button> */}
            </Container>
        </Navbar>
    )
}

export default NavBar;