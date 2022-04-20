import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';


function NavBar({ user, setUser }){

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
            <Container>
                <Navbar.Brand as={NavLink} to="/">Workout Programmer</Navbar.Brand>
                <Button variant="outline-danger" onClick={handleClick}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default NavBar;