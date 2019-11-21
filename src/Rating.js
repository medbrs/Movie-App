import React from 'react'

const Rating = props => {
    let arrayOfStars = []
    for(let i = 0 ; i < 5 ; i++){
        if(props.rating > i){
            arrayOfStars.push(<span onClick={() => props.setRate(i+1)}>★</span>)
        }else{
            arrayOfStars.push(<span onClick={() => props.setRate(i+1)}>☆</span>)
        }
    }
    return(
        <h1>{arrayOfStars}</h1>
    )   
}


export default Rating