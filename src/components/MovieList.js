import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  console.log("MMMMOOOVVVIIIEEEESSSS",movies)
  return (
    <div className="px-6">
      <h1 className="text-xl font-bold py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
              {movies?.map(movie=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
              ))}   
              {/* <MovieCard posterPath={movies[0].poster_path}/> */}

            </div>
        </div>
    </div>
  )
}

export default MovieList
