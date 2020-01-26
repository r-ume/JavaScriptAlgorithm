import React, { useReducer, useEffect } from 'react'

import MovieHeader from '../organisms/movie-header'
import Movie from '../molecules/movie-item'
import Search from '../molecules/movie-search'

import axios from 'axios'

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      }
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      }
    default:
      return state
  }
}

const MovieIndex = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: jsonResponse.data.Search,
      })
    })
  }, [])

  const search = (searchValue) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    })

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then((jsonResponse) => {
      if (jsonResponse.Response === 'True') {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.data.Search,
        })
      } else {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: jsonResponse.data.Error,
        })
      }
    })
  }

  const retrievedMovies = () => {
    const { movies, errorMessage, loading } = state

    if (loading && !errorMessage) {
      return <span>loading... </span>
    }

    if (errorMessage) {
      return <div className="errorMessage">{errorMessage}</div>
    }

    return movies.map((movie, index) => {
      return <Movie key={`${index}-${movie.Title}`} movie={movie} />
    })
  }

  return (
    <div className="App">
      <MovieHeader text="HOOKED" />

      <Search search={search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>

      <div className="movies">{retrievedMovies()}</div>
    </div>
  )
}

export default MovieIndex
