import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice"



const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)

  const user = useSelector(store=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    })
  }

  const handleGptSearchClick =() => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
    console.log(e.target.value)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

          return ()=>unsubscribe()
      },[])

  return (
    <div 
    className="absolute w-screen px-8 py-2 
    z-10 bg-gradient-to-b from-black 
    flex flex-col md:flex-row 
    md:justify-between
    justify-center"
    >
      <img 
      className="w-44 shadow-lg mx-auto md:mx-0"
      src={LOGO}
      alt="netflix-logo"
      />

      {user&&(<div className="flex justify-between p-2">
        {showGptSearch&&
        <select 
        onChange={handleLanguageChange}
        className="p-2 m-2 h-10 mt-4 bg-gray-900 text-white">
          {SUPPORTED_LANGUAGES.map(lang=>(
            <option key={lang.identifier}
            value={lang.identifier}>{lang.name}</option>
          ))}
        </select>}

        <button className="p-2 m-2 text-white w-30 rounded h-10 mt-4 bg-purple-900"
        onClick={handleGptSearchClick}>
          {showGptSearch?"Home":"GPT Search"}
          </button>
        <img
        src={user.photoURL}
        alt="user-logo"
        className="w-10 h-10 mt-4 mr-5 rounded-full hidden md:block"/>

        <button 
        onClick={handleSignOut}
        className="bg-red-500 w-40 font-serif h-10 rounded mt-4 text-white">Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
