import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import Nav from 'react-bootstrap/Nav';
import Navbar from  'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'

import { NavLink } from 'react-router-dom';


function NavBar({ user, setUser, showLogin, setShowLogin }){

    let buttonText;

    buttonText = showLogin ? 'Sign Up' : 'Login';
    if (user) buttonText = 'Logout';

    const renderNavs = user ? false : true;

    const style = {
        color: "white",
        fontSize: "larger"
    }

    const activeStyle = {
        color: "#dc3545"
    }
        


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
                <Nav.Link 
                    disabled={renderNavs} 
                    as={NavLink} 
                    style={style}
                    activeStyle={activeStyle}
                    exact
                    to="/"
                >
                    Home
                </Nav.Link>
                <Nav.Link 
                    className="navlink"
                    disabled={renderNavs} 
                    as={NavLink} 
                    to="/profile"
                    style={style}
                    activeStyle={activeStyle}
                >
                    {/*{user.user.name}'s */}Profile
                </Nav.Link>
                <Button variant="outline-danger" onClick={handleClick}>{buttonText}</Button> 
            </Container>
        </Navbar>
    )
}

export default NavBar;