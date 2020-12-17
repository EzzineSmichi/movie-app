import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


function Rating({rate, setVal={}}) {

    const [rating, setRating] = useState(null)
   


    return (
        <div>
            {[...Array(5)].map((star, i)=>{

                const ratingValue = i +1 ;
                return (
                    <label key ={i}>
                        <input type = 'radio' 
                            name = 'rate' 
                            value = {ratingValue}
                            onClick = {()=>{setRating(ratingValue); setVal(ratingValue)}}
                        />

                        <FaStar className = 'star' 
                            size ={25} 
                            color = {ratingValue <=(rate ||rating)  ? '#ffc107': '#e4e5e9'}
                            onClick = {()=>setRating(ratingValue)}
                        />
                        
                    </label>
                )
            })}
            
        </div>
    )
}

export default Rating
