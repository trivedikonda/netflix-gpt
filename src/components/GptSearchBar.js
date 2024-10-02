import { useSelector } from "react-redux"
import { lang } from "../utils/languageConstants"

const GptSearchBar = () => {

  const languageKey=useSelector(store=>store.config.lang)
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input type="text" 
        placeholder={lang[languageKey].gptSearchPlaceholder}
        className="p-4 m-4 col-span-10"/>
        <button className="col-span-2 bg-red-700 text-white rounded mt-7 mr-3 h-10">
          {lang[languageKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
