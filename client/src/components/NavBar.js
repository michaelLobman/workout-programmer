import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'

import { NavLink } from 'react-router-dom';


function NavBar({ user, setUser, showLogin, setShowLogin }){

    let buttonText;

    buttonText = showLogin ? 'Sign Up' : 'Login';
    if (user) buttonText = 'Logout';

    const renderText = user ?  <Navbar.Text>Welcome, {user.name}</Navbar.Text> : null
        


    function handleClick(){
        if (user) {
            fetch('/logout', {
                method: "DELETE"
            })
                .then(r => {
                    if (r.ok){
                        setUser(null)
                    }
                });
        } else {
            setShowLogin(!showLogin)
        }
    }
    return (
        <Navbar bg='dark' variant='dark'  >
            <Container id='navbar-container'>
                <Navbar.Brand as={NavLink} to="/">Workout Programmer</Navbar.Brand>
                <Nav.Link className="navlink" as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link className="navlink"as={NavLink} to="/profile">{/*{user.user.name}'s */}Profile</Nav.Link>
{/*                {renderText}
*/}                <Button variant="outline-danger" onClick={handleClick}>{buttonText}</Button> 
            </Container>
        </Navbar>
    )
}

export default NavBar;