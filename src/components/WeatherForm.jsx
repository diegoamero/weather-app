import React, { useState } from 'react'
import './WeatherForm.css'

function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('')

    function onChange(e){
        const value = e.target.value

        if(value !== ''){
            setCity(value)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        onChangeCity(city)
    }

    return <form onSubmit={handleSubmit} className='form'>
        <input type="text" onChange={onChange} className='form__input'/>
    </form>
}

export default WeatherForm