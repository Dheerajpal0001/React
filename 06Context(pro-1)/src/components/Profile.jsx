import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

  

  if(!user) return <div>Please Login first</div>
// if(!user) return <div>Please fill details</div>

  return(
    <>
    {/* <h2>Profile</h2> */}
    <div>Welcome {user.username}</div>
    </>
  ) 
}

export default Profile