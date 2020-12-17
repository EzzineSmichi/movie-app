import { useState } from 'react';
import MovieList from './components/MovieList';
import Form from './components/Form';
import './App.css';
import Rating from './components/Rating';


function App () {

  const [movies, setMovies] = useState([ 
    {
      title : '365 Days',
      description : 'Lorem ipsum dolor sit amet.',
      posteUrl : '365Days.com',
      rate : 2
    }, 
    {
      title : '100 Days',
      description : 'Lorem ipsum dolor sit amet.',
      posteUrl : '100Days.com',
      rate : 5
    },
    {
      title : 'One Day',
      description : 'Lorem ipsum dolor sit amet.',
      posteUrl : 'OneDay.com',
      rate : 3
    },
    
      {
        title : 'One, Two, Three',
        description : 'dsskkkllk',
        posteUrl : 'OneTwoThree.com',
        rate : 4
      }
    
   ])

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
        <div className='App'>
          <Rating rate = {val} setVal = {setVal} />
          <input type= 'text' className = 'search' value = {searchTerm} onChange = {e=>setsearchTerm(e.target.value)} placeholder = 'Search for a movie!'/>
          <br></br>
          <MovieList movies = {dynamicSearch()}/>
          <br></br>
          <Form addNewMovie = {addNewMovie}/>
        </div>
      );
    
}

export default App;
