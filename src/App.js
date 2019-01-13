import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from "./components/WeatherCard";
import WeatherBootsrtap from "./components/WeatherBootsrtap";

class App extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="App">
                <WeatherBootsrtap/>
            </div>
        );
    }
}

export default App;
