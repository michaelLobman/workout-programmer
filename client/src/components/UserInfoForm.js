import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function UserInfoForm({ fullName, setFullName, email, setEmail, password, setPassword, passwordConf, setPasswordConf}){

    return (

    <>
        <Form.Group className="form-group">
            <FloatingLabel
                controlId="floatingName"
                label="Full Name"
                className="mb-3"
            >
                <Form.Control 
                    className='form-input'
                    type="text" 
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e => setFullName(e.target.value))}
                />
            </FloatingLabel>
        </Form.Group>
        <Form.Group className="form-group">
            <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
            >
                <Form.Control 
                    className='form-input'
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={(e => setEmail(e.target.value))}
                />
            </FloatingLabel>
        </Form.Group>
        <Form.Group className="form-group">
            <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
            >
                <Form.Control 
                    className='form-input'
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e => setPassword(e.target.value))}
                />
            </FloatingLabel>
        </Form.Group>
        <Form.Group className="form-group">
            <FloatingLabel
                controlId="floatingPasswordConf"
                label="Confirm Password"
                className="mb-3"
            >
                <Form.Control 
                    className='form-input'
                    type="password" 
                    placeholder="Confirm Password"
                    value={passwordConf}
                    onChange={(e => setPasswordConf(e.target.value))}
                />
            </FloatingLabel>
        </Form.Group>
    </>
    )
}

export default UserInfoForm;