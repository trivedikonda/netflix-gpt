import openai from "../utils/openai"
import { useSelector } from "react-redux"
import { lang } from "../utils/languageConstants"
import { useRef } from "react"
import { API_OPTIONS } from "../utils/constants"

const GptSearchBar = () => {

  const languageKey=useSelector(store=>store.config.lang)
  
  const searchText = useRef(null)

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value)
    // Make an API call to GPT API and get movie results

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query"+searchText.current.value+"only give me the names of five movies";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      //TODO: write err handling
    }

    const gptMovies= gptResults.choices[0]?.message?.content.split(",");
    
    // ["Stranger Things", "Dark", "Interstellar", "Harry Potter", "4 More Shots Please"]


    // For each movie I will search TMDB api  


    const data  = searchMovieTMDB()
    const searchMovieTMDB = async(movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query"+movie+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      console.log(data)
      const json = await data.json()
    }


  }


  return (
    <div className="pt-[15%] flex justify-center">
      <form 
      className="bg-black w-3/4 flex items-center p-4 rounded-lg shadow-md"
      onSubmit={(e)=>e.preventDefault()}>
        <input type="text" 
        ref={searchText}
        placeholder={lang[languageKey].gptSearchPlaceholder}
        className="p-3 flex-grow mr-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"/>
        <button className=" bg-red-700 text-white rounded-r-lg h-12 px-4 transition duration-200 hover:bg-red-600"
        onClick={handleGptSearchClick}>
          {lang[languageKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
