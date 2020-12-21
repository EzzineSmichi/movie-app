import React from 'react'

import Rating from './Rating.js'
const MovieCard = ({id, title, image, rate}) => {
        return (
           
            <div className='movie'>
                <h1>{title}</h1>
                <img src= {image} />
                
                <Rating style={{textAlign:'center', marginTop : '2rem'}} rate = {rate}  />
                
               
            </div>
            
        )
} 
                    
export default MovieCard
