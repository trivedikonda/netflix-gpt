import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../utils/constants"
import { addNowPlayingMovies } from "../../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies= () => {
    //Fetch data from TMDB API and update the store
  const dispatch = useDispatch()

  const getNowPlayingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1", 
        API_OPTIONS)

      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies