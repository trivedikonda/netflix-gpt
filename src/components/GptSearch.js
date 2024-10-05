import { BG_IMAGE } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
          <img src={BG_IMAGE}
          alt="bg-image"
          className="h-screen w-screen object-cover"/>
        </div>
        <div className="pt-[30%] md:p-0">
          <GptSearchBar/>
          <GptMovieSuggestions/>
        </div>
    </>
  )
}

export default GptSearch
