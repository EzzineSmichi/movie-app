import React from 'react'
import Rating from './Rating.js'
const MovieCard = ({title, description, posteUrl, rate}) => {
    
        return (
           
            <div className='movie'>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href ='#'>{posteUrl}</a> <br/>
                <Rating style={{textAlign:'center', marginTop : '2rem'}} rate = {rate}  />
            </div>
        )
} 
                    
export default MovieCard
