import React from 'react'

const MovieCard = ({thumbnail}) => {
  return (
    <div>
        <img src={thumbnail} alt='thumbnail' />
    </div>
  )
}

export default MovieCard