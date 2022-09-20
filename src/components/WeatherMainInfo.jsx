import React from 'react'
import './WeatherMainInfo.css'

function WeatherMainInfo({weather}) {
  return (
    <div className='mainInfo'>
        <div className='mainInfo__city'>{weather?.location.name}</div>
        <div className='mainInfo__country'>{weather?.location.country}</div>
        <div className='mainInfo--details'>
            <div>
                <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width='128px' 
                    alt={weather?.current.condition.text}
                />
            </div>
            <div className='details--text'>
                <div className='details--text__temp'>{weather?.current.temp_c}°</div>
                <div className='details--text__condition'>{weather?.current.condition.text}</div>
            </div>
        </div>
        <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317715.71192633547!2d${weather?.location.lon}67!3d${weather?.location.lat}9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1663638862888!5m2!1ses!2sve`} 
            width="100%"
            height="300" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default WeatherMainInfo