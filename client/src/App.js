import { useState, useEffect } from 'react';


import Login from './pages/Login'
// import Home from './pages/Home'

function App(){

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok){
        r.json().then(user => setUser(user))
      }
    });
  }, [])

  if (!user) return <Login />

  return (
    <p>{user} logged in</p>
    
  )
}

export default App;