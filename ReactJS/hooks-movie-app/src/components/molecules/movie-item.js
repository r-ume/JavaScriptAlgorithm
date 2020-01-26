import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

  useEffect(() => {
    console.log({ movie })
  })

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="200" alt={`The movie titled: ${movie.Title}`} src={poster} />
      </div>
      <p>({movie.Year})</p>
    </div>
  )
}

Movie.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string,
}

export default Movie
