import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user
        dispatch(addUser(
            {uid:uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
        }))
        navigate("/browse")
      } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
          });
      },[])

  return (
    <div 
    // className="fixed top-0 left-10 z-10 py-4  bg-gradient-to-b to-black justify-between"
    className="absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between"
    >
      <img 
      className="w-44 shadow-lg"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="netflix-logo"
      />

      {user&&(<div className="flex justify-between">
        <img
        src={user.photoURL}
        alt="user-logo"
        className="w-10 h-10 mt-4 mr-5 rounded-full"/>

        <button 
        onClick={handleSignOut}
        className="bg-red-500 w-40 font-serif h-10 rounded mt-4 text-white">Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
