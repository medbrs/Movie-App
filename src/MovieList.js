import React  from 'react'
import MovieItem from './MovieItem'
import Hoc from './Hoc'



const MovieList = (props) => { 
 

    return (
        <div className='infos'>
            {
                props.movies.map(el => <MovieItem infos={el}/>)
            }
           
            
        </div>
    )
}



export default Hoc(MovieList);