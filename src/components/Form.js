import React, { useState } from 'react'


const Form = ({addNewMovie}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [posteUrl, setPosteUrl] = useState('')
    const [rate, setRate] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        let newMovie = { title, description, posteUrl, rate }
        addNewMovie(newMovie);
        setTitle('')
        setDescription('')
        setPosteUrl('')
        setRate('')
    }

    return (
        <form onSubmit = {handleSubmit} className = 'form'>
                <input type='text' value = {title} onChange = {e => setTitle(e.target.value)}/>  
                <textarea rows = '10' cols = '10' value = {description} onChange = {e => setDescription(e.target.value)}/> 
                <input type ='url' value = {posteUrl} onChange = {e => setPosteUrl(e.target.value)} /> 
                <input type = 'number' min= '1' max = '5' value = {rate} onChange = {e => setRate(e.target.value)} />
                
                <br/>
                <button>add movie</button>
        </form>
    )
}

export default Form