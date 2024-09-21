import {useState} from 'react'
import Header from './Header'

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)

  const handleToggle = () =>{
    setIsSignedIn(!isSignedIn)
  }

  return (
    <div>
        <Header/>
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="bg-image"/>
        </div>

        {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
            <form className="absolute bg-black my-36 mx-auto p-12 rounded
             text-white right-0 left-0 w-3/12 bg-opacity-80">
              <h1 className="font-semibold text-3xl text-left py-4">{isSignedIn?"Sign In": "Sign Up"}</h1>
                {!isSignedIn&&<input 
                    type="text"
                    placeholder="First Name"
                    className='w-full p-2 m-2 border border-slate-400 rounded bg-transparent'
                />}
                <input 
                    type="text"
                    placeholder="Email Address"
                    className='w-full p-2 m-2 border border-slate-400 rounded bg-transparent'
                />
                <input 
                    type="password"
                    placeholder="Password"
                    className='p-2 m-2 border border-slate-400 rounded w-full bg-transparent' 
                    
                
                />
                <button className="w-full p-2 m-2 bg-red-700 text-white rounded">{isSignedIn?"Sign In": "Sign Up"}</button>
            
                <p className="font-semibold cursor-pointer" onClick={handleToggle}>{isSignedIn?"Already Registered, Please Sign In.":"New to Netflix? Sign Up now."}</p>
            
            </form>
        {/* </div> */}


    </div>
  )
}

export default Login



