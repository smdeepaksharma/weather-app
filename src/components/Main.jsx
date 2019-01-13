import React from "react";
import WeatherData from "./WeatherData";
import {Col, Grid, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {getFormattedTime, toCelsius} from "./util";


export const Main = (props) => {

    const minTemperature = props.temperatureUnit === 'f' ? props.temp_min : toCelsius(props.temp_min);
    const maxTemperature = props.temperatureUnit === 'f' ? props.temp_max : toCelsius(props.temp_max);

    return <ListGroup style={{color: '#0d3349'}}>
        <ListGroupItem>
            <Grid fluid={true}>
                <Row>
                    <Col xs={6}>
                        <WeatherData label={"PRESSURE"} data={props.pressure}/>
                    </Col>
                    <Col xs={6}>
                        <WeatherData label={"HUMIDITY"} data={props.humidity} symbol={'%'}/>
                    </Col>
                </Row>
            </Grid>
        </ListGroupItem>

        <ListGroupItem>
            <Grid fluid={true}>
                <Row>
                    <Col xs={6}>
                        <WeatherData label={"TEMP MIN"} data={minTemperature} symbol={props.temperatureUnit}/>
                    </Col>
                    <Col xs={6}>
                        <WeatherData label={"TEMP MAX"} data={maxTemperature} symbol={props.temperatureUnit}/>
                    </Col>
                </Row>
            </Grid>
        </ListGroupItem>

        <ListGroupItem>
            <Grid fluid={true}>
                <Row>
                    <Col xs={6}>
                        <WeatherData label={"WIND SPEED"} data={props.wind.speed}/>
                    </Col>
                    <Col xs={6}>
                        <WeatherData label={"WIND DIRECTION"} data={props.wind.deg}/>
                    </Col>
                </Row>
            </Grid>
        </ListGroupItem>

        <ListGroupItem>
            <Grid fluid={true}>
                <Row>
                    <Col xs={6}>
                        <WeatherData label={"SUNRISE"} data={getFormattedTime(props.sys.sunrise)} symbol={'AM'}/>
                    </Col>
                    <Col xs={6}>
                        <WeatherData label={"SUNSET"} data={getFormattedTime(props.sys.sunset)} symbol={'PM'}/>
                    </Col>
                </Row>
            </Grid>
        </ListGroupItem>
    </ListGroup>
};



