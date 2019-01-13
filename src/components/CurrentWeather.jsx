import React from 'react'

export const CurrentWeather = (props) => {

    const {high, low, currentWeatherDescription} = props;

    return <h6>Today: {currentWeatherDescription}. The high will be {high}, low will be {low}</h6>

};