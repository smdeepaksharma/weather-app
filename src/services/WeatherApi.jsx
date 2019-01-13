import RestAPI from "./RestAPI";

const API_KEY = '0f250318d3fc153e862d1a271c7c36b1';

class WeatherApi {

    static getWeatherOfCity(city) {
        return RestAPI.get(`weather?q=${city}&APPID=${API_KEY}&units=imperial`)
    }

    static getWeatherByCoordinates(lat, lng) {
        return RestAPI.get(`weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}&units=imperial`)
    }

}

export default WeatherApi

const sample = {
    "dt": 1546765200,
    "main": {
        "temp": 266.12,
        "temp_min": 265.386,
        "temp_max": 266.12,
        "pressure": 1012.14,
        "sea_level": 1033.46,
        "grnd_level": 1012.14,
        "humidity": 86,
        "temp_kf": 0.73
    },
    "weather": [
        {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
        }
    ],
    "clouds": {
        "all": 88
    },
    "wind": {
        "speed": 1.86,
        "deg": 8.00238
    },
    "snow": {
        "3h": 0.07125
    },
    "sys": {
        "pod": "d"
    },
    "dt_txt": "2019-01-06 09:00:00"
};