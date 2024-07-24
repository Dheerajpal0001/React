import React , {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const [status , setStatus] = React.useState('Login');

    const handlesubmit = (e)=>{
        e.preventDefault()
        if(username == '' || password == '') return <div>Please fill details</div>

        return(
          setUser({username,password}),
          setStatus('Profile')
        ) 
    }
  return (
    <div>
        <h2>{status}</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=> setusername(e.target.value)}/>{" "}
        <input type="text" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login