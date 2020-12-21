import React, { useState } from 'react'


const Form = ({addNewMovie}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        let newMovie = { title, description, rate }
        addNewMovie(newMovie);
        setTitle('')
        setDescription('')
        setRate('')
    }

    return (
        <form onSubmit = {handleSubmit} className = 'form'>
                <input type='text' value = {title} onChange = {e => setTitle(e.target.value)} placeholder='enter title of movie'/>  
                <textarea rows = '10' cols = '10' value = {description} onChange = {e => setDescription(e.target.value)} placeholder='enter description of movie'/> 
                <input type = 'number' min= '1' max = '5' value = {rate} onChange = {e => setRate(e.target.value)} placeholder='enter rating for movie'/>
                
                <br/>
                <button>add movie</button>
        </form>
    )
}

export default Form