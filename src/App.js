import { useState } from 'react';
import MovieList from './components/MovieList';
import Form from './components/Form';
import './App.css';
import Rating from './components/Rating';


function App () {

  const [movies, setMovies] = useState([ 
    {
      title : '365 Days',
      description : 'bbbbb',
      posteUrl : 'bbbbb.com',
      rate : 2
    }, 
    {
      title : '100 Days',
      description : 'dsskkkllk',
      posteUrl : 'fhjdkks.com',
      rate : 5
    },
    {
      title : 'One Day',
      description : 'dsskkkllk',
      posteUrl : 'fhjdkks.com',
      rate : 3
    },
    
      {
        title : 'One, Two, Three',
        description : 'dsskkkllk',
        posteUrl : 'fhjdkks.com',
        rate : 4
      }
    
   ])

    
  const [searchTerm, setsearchTerm] = useState('')

  const dynamicSearch = () => {
    
      return movies.filter(movie=> movie.rate >= val && movie.title.toLowerCase().includes(searchTerm.toLowerCase())) 

    
  }
     
  

  const addNewMovie = newMovie => {
    return setMovies([...movies, newMovie])
  }


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
