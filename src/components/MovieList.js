import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return (
        <div className='list'>
            {movies.map((movie, i)=> <MovieCard key ={i} title = {movie.title} description = {movie.description} posteUrl = {movie.posteUrl} rate = {movie.rate}/> )}
        </div>
    )
}

export default MovieList
