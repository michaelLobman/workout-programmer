import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from  'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';


function NavBar({ user, setUser, showLogin, setShowLogin }){
    
    const buttonText = showLogin ? 'Sign Up' : 'Login';

    const style = {
        color: "#dc3545",
    }

    const activeStyle = {
        color: "white",
        backgroundColor: "#dc3545"
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
                <Navbar.Brand id="navbar-brand" as={NavLink} to="/">Workout Programmer</Navbar.Brand>
                {user ? (
                     <Dropdown align="end" id="user-dropdown">
                        <Dropdown.Toggle size="lg" variant="outline-danger">{user.name}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={NavLink}
                                exact
                                style={style}
                                activeStyle={activeStyle}
                                to="/"
                            >
                                Workouts
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={NavLink}
                                style={style}
                                activeStyle={activeStyle}
                                to="/profile"
                            >
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item
                                as={Button}
                                style={style}
                                onClick={handleClick}
                            >
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : <Button variant="outline-danger" onClick={handleClick}>{buttonText}</Button>
            }
            </Container>
        </Navbar>
    )
}

export default NavBar;