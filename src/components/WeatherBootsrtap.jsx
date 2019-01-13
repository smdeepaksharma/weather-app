import React from "react";
import FormExample from "./FormExample";
import {Button, Col, Grid, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import WeatherApi from "../services/WeatherApi";
import {DegreeCelsius, DegreeFahrenheit} from "./Symbols";

class WeatherBootsrtap extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedCity: 'San Diego'
        }
    }

    onSearch(city) {
        WeatherApi.getWeatherOfCity(city).then(response => {
            this.setState({data: response.data})
        })
    }

    onCurrentLocation(lat, long) {
        WeatherApi.getWeatherByCoordinates(lat, long).then(response => {
            this.setState({data: response.data})
        })
    }


    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <SearchBar onSearch={city => this.onSearch(city)}
                                   onCurrentLocation={(lat, lng) => this.onCurrentLocation(lat, lng)}/>
                    </Col>

                    <Col xs={12}>
                        <WeatherCard data={this.state.data} tempUnit={this.state.tempUnit}/>
                    </Col>
                </Row>
            </Grid>


        )
    }
}

export default WeatherBootsrtap;