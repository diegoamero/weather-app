import React from 'react'
import './TimeInfo.css'

function TimeInfo({localTime}) {
    let date = new Date(localTime),
        dayName = '',
        day = date.getDay(),
        hours = date.getHours(),
        minutes = date.getMinutes()

        switch (day) {
            case 0:
                dayName = 'Sunday'
                break
            case 1:
                dayName = 'Monday'
                break
            case 2:
                dayName = 'Tuesday'
                break
            case 3:
                dayName = 'Wednesday'
                break
            case 4:
                dayName = 'Thursday'
                break
            case 5:
                dayName = 'Friday'
                break
            case 6:
                dayName = 'Saturday'
                break
            default: 
                break
        }

    return <div className='TimeInfo'>
        <div className='TimeInfo--day'>{dayName}</div>
        <div className='TimeInfo--time'>{hours}:{minutes}</div>
    </div>
}

export default TimeInfo