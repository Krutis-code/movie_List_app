import React, { useEffect } from 'react'

const MovieCard = ({data}) => {
  useEffect(()=>{
  },[ ])
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.Poster} alt=""></img>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MovieCard