import { useState } from 'react';
import MovieList from './components/MovieList';
import Form from './components/Form';
import './App.css';


function App () {

  const [movies, setMovies] = useState([ 
    {
      title : 'aaaa',
      description : 'bbbbb',
      posteUrl : 'bbbbb.com',
      rate : 2
    }, 
    {
      title : 'fffff',
      description : 'dsskkkllk',
      posteUrl : 'fhjdkks.com',
      rate : 5
    }
   ])

    
  const [searchTerm, setsearchTerm] = useState('')

  const dynamicSearch = () => {
    if (parseInt(val)){
      return movies.filter(movie=> movie.rate == val && movie.title.toLowerCase().includes(searchTerm.toLowerCase())) 

    } else{
      return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

    }
  }
     
  

  const addNewMovie = newMovie => {
    return setMovies([...movies, newMovie])
  }


  const [val, setVal] = useState(0)
    
      return (
        <div className='App'>
          <input type = 'number' min= '1' max = '5' value = {val} onChange = {e => setVal(e.target.value)} />
          <input type= 'text' className = 'search' value = {searchTerm} onChange = {e=>setsearchTerm(e.target.value)} placeholder = 'Search for a movie!'/>
          <br></br>
          <MovieList movies = {dynamicSearch()}/>
          <br></br>
          <Form addNewMovie = {addNewMovie}/>
        </div>
      );
    
}

export default App;
