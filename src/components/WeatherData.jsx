import {Panel} from "react-bootstrap";
import React from 'react'
import {symbolMapper} from "./Symbols";

export default class WeatherData extends React.Component {


    getWeatherData() {
        if (this.props.data) {
            return <h4 style={{marginTop: -8}}>
                {this.props.data} {symbolMapper[this.props.symbol]}
            </h4>
        } else {
            return <p style={{color: 'gray',marginTop: -8}}>Not available</p>
        }
    }


    render() {

        const {label} = this.props;

        return <div style={{fontFamily: 'Helvetica Neue'}}>
            <p style={{color: '#757575', fontSize: 10}}>{label}</p>
            {this.getWeatherData()}
        </div>
    }

}