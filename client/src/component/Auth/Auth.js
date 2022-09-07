import React from 'react'
import jwt_decode from 'jwt-decode'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
const Auth = () => {
  const [isSignup, setIsSignup] = React.useState(false)
  const handleChange = () =>{

  }
  function SignIn(){
    setIsSignup(!isSignup);
  }
  async function createOrGetUser(response, addUser){
    const decode = jwt_decode(response.credential);
    const { name, picture, sub} = decode
    const user = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture 
    }
  }
  return (
    <div>
      <button onClick={SignIn}>Sign in</button>
      <form>
        {isSignup && (
            <>
              <label htmlFor='username'>Username:</label>
              <input
                id='username'
                type='text'
                required
                autoFocus
                handleChange={handleChange}
              />
              <label htmlFor='password'>Password:</label>
              <input
                id='password'
                type='password'
                required
              />
              <GoogleLogin 
              onSuccess={(response) => createOrGetUser(response)}
              onError={() => console.log("error")}
              />
            </>
          )
        }
      </form>
    </div>
  )
}

export default Auth