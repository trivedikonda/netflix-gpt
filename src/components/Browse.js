import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import usePopularMovies from './hooks/usePopularMovies'
import useTopRatedMovies from './hooks/useTopRatedMovies'
import useUpcomingMovies from './hooks/useUpcomingMovies'


const Browse = () => {

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
      <div>
        <Header/>
        {/*
        Main Container
          - VideoBackground
          - VideoTitle
        Secondary Container
          -MovieList * n
            - cards * n
        */}
        <div>
          <MainContainer/>
          <SecondaryContainer/>
        </div>
      </div>
    )
}

export default Browse
