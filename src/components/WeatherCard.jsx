import React from 'react';
import {Main} from "./Main";
import {Button, Col, Grid, PageHeader, Row} from "react-bootstrap";
import {DegreeCelsius, DegreeFahrenheit, symbolMapper} from "./Symbols";
import {toCelsius} from "./util";

class WeatherCard extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tempUnit: 'f'
        }
    }

    render() {

        if (!this.props.data) {
            return <div></div>
        }

        const {main, rain, weather, wind, sys, name} = this.props.data;

        const currentWeather = weather ? weather[0] : {};


        const currentTemp = this.state.tempUnit === 'f' ? main.temp : toCelsius(main.temp);

        return this.props.data && <Grid style={{padding: 0}}>
            <Row>
                <Col xs={12}>
                    <h4>{name}</h4>
                    <PageHeader style={{marginTop: -16}}>
                        {currentTemp}{symbolMapper[this.state.tempUnit]} <small>{currentWeather.description}</small>
                    </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={5} lg={5}>
                    <Main {...main} wind={wind} sys={sys} temperatureUnit={this.state.tempUnit}/>
                </Col>
            </Row>


            <Row>
                <Col xs={12}>
                    <span>Units : </span>
                    <Button bsStyle="link" onClick={() => this.setState({tempUnit: 'c'})}><DegreeCelsius/></Button> &nbsp;
                    <Button bsStyle="link" onClick={() => this.setState({tempUnit: 'f'})}><DegreeFahrenheit/></Button>
                </Col>
            </Row>

        </Grid>
    }

}

export default WeatherCard