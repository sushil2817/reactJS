import React,{userState, useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {
     
     const [username setUsername] = userState('')
     const [password, setPassword] = useState('second')

    const handleSubmit = () =>{

    }

  return (
    <div>
        <h2>Login</h2>
        
        <input type="text" value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='UserName' />

        <input type="text" value={password} 
        onChange={(e)=>setPassword(e.target.value)} placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
