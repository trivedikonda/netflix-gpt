import {useRef, useState} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)

  const [errorMessage,setErrorMessage] = useState(null)

  const dispatch = useDispatch()
  
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleToggle = () =>{
    setIsSignedIn(!isSignedIn)
  }

  const handleButtonClick=()=>{
    //validate the form data
    // checkValidData(email,password)
    // console.log("Email and password", name.current.value, email.current.value, password.current.value)
    const message = checkValidData(email.current.value, password.current.value)
    // console.log(message)

    setErrorMessage(message)

    //Sign In / Sign Up

    if(message) return 

    if(!isSignedIn){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, 
          // photoURL: user.photoURL
          photoURL:"https://avatars.githubusercontent.com/u/120240029?v=4"
        })
        .then(()=>{
          const {uid, email, displayName, photoURL} = auth.currentUser
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          }));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage + "-" + errorCode)
        
      });
    }else{
      // Sign In Logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("SIGNED IN USER", user)
        // if the user is logged in successfully

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorMessage + "-" + errorCode)

      });

    }
  }

  return (
    <div>
        <Header/>
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="bg-image"/>
        </div>

        {/* <div className="flex items-center justify-center min-h-screen bg-gray-100"> */}
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="absolute bg-black my-36 mx-auto p-12 rounded
             text-white right-0 left-0 w-3/12 bg-opacity-80"
             >
              <h1 className="font-semibold text-3xl text-left py-4 pl-2">{isSignedIn? 
              "Sign In": "Sign Up"}</h1>
                {!isSignedIn&&<input 
                    type="text"
                    ref={name}
                    placeholder="First Name"
                    className='w-full p-2 m-2 border border-slate-400 rounded bg-transparent'
                />}
                <input 
                    type="text"
                    placeholder="Email Address"
                    ref={email}
                    className='w-full p-2 m-2 border border-slate-400 rounded bg-transparent'
                />
                <input 
                    type="password"
                    placeholder="Password"
                    ref={password}
                    className='p-2 m-2 border border-slate-400 rounded w-full bg-transparent' 
                />

                <p className='text-red-700 pl-2'>{errorMessage}</p>

                <button 
                className="w-full p-2 m-2 bg-red-700 text-white rounded"
                onClick={handleButtonClick}>{isSignedIn?"Sign In": "Sign Up"}</button>
            
                <p className="font-semibold cursor-pointer pl-2" onClick={handleToggle}>{isSignedIn?"New to Netflix? Sign Up now.":"Already Registered, Please Sign In."}</p>
            
            </form>
        {/* </div> */}


    </div>
  )
}

export default Login



