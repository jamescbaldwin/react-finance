import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import JSONPretty from "react-json-pretty"




const Profile = () => {
    const { user, isAuthenticated } = useAuth0()

    return (
      isAuthenticated && (
        <div>
            <h1>{user.name}</h1>
            <img src={user.picture} alt={user.name} />
            <p>{user.email}</p>
            {/* <JSONPretty data={user} /> */}
            {/* {JSON.stringify(user, null, 2)} */}
        </div>
    )
  )
}

export default Profile