import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar'
import SignUpForm from '../components/SignUpForm';


function SignUp({ setUser, user = null }) {
    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <SignUpForm onSignUp={setUser}/>
        </>
    )
}
export default SignUp;