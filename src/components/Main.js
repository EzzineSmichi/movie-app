import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa';
import MovieList from './MovieList';
import Form from './Form';
import Rating from './Rating';
import DataMovies from './DataMovies';


const Main = () => {

    const [movies, setMovies] = useState( DataMovie)
     
    
      //state for searching movie by title  
      const [searchTerm, setsearchTerm] = useState('')
      
    
      //searching movie by title or/and rating
      const dynamicSearch = () => {
          return movies.filter(movie=> movie.rate >= val && movie.title.toLowerCase().includes(searchTerm.toLowerCase()))   
      }
         
      //add movie
      const addNewMovie = newMovie => {
        return setMovies([...movies, newMovie])
      }
    
      //state change the value of rating
      const [val, setVal] = useState(1)
        
    return (
        <div>
          <div className='header'>
          <Rating rate = {val} setVal = {setVal} />
          <input type= 'text' className = 'search' value = {searchTerm} onChange = {e=>setsearchTerm(e.target.value)} placeholder = 'Search for a movie!'/>
          </div>  
          <MovieList movies = {dynamicSearch()}/>   
          <Form addNewMovie = {addNewMovie}/>
        </div>

        
        
    )
}

export default Main
