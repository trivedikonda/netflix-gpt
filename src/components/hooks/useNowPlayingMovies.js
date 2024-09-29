import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../../utils/moviesSlice"

import { API_OPTIONS } from "../../utils/constants"

const useNowPlayingMovies= () => {
    //Fetch data from TMDB API and update the store
  const dispatch = useDispatch()

  const getNowPlayingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1", 
        API_OPTIONS)

      const json = await data.json()

      console.log("NOW PLAYING", json.results)
      dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies