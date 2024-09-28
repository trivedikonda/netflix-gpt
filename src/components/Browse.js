import React from 'react'
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'


const Browse = () => {

    useNowPlayingMovies()
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
