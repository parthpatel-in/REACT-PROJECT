// sending data  
import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
//  in the usercontext we have to learn how to fetch data this can be help  by usecontext hooks line no 9
function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()   // default behaviour
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        
         {/* state control by  value , if filed  will change so i have update the state using onchange event */}
        {" "}
        
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Auth;


