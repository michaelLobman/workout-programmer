import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'

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

  if (!user) return <Login setUser={setUser} />

  return (
    <Switch>
      <Route exact path ='/'>
        <Home user={user} setUser={setUser} />
      </Route>
    </Switch>    
  )
}

export default App;