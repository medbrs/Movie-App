import React from 'react'
import Rating from './Rating'

const MovieItem = props => {
    return(
        <div className='movies'>
            <img className='image' src ={props.infos.image}/>
            <div className='titles'>
             <h5>{props.infos.title}-</h5>
              <h5>{props.infos.year}</h5>
              </div>
              <Rating rating={props.infos.rating} setRate={() => {}} />
              </div>                      
    )
}


export default MovieItem