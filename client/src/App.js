import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';

function App(){

  const [user, setUser] = useState(null)

  console.log(user)

  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then(user => setUser(user))
      }
    });
  }, [])

  // if (!user) return <Login setUser={setUser} />

  if (!user) return <Login setUser={setUser} />

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/profile'>
          <Profile user={user} />
        </Route>
        <Route exact path ='/'>
          <Home user={user} setUser={setUser} />
        </Route>
      </Switch>    
    </>
  )
}

export default App;