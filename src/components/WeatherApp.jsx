import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'
import Loading from './Loading'
import './WeatherApp.css'

function WeatherApp() {
    //estado principal de la app
    const [weather, setWeather] = useState(null)

    //¿Por qué ejecuta dos veces?
    useEffect(()=>{
        loadInfo()
    },[])

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
        
            const json = await request.json()
            setWeather(json)
            console.log(json)
        }catch(error){

        }
    }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo(city)
    }

    //el signo ? al momento de usar una propiedad es para decir que es opcional
    //en caso de que no esté dicha propiedad
    return <div className='weatherApp'>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
    </div>
}

export default WeatherApp