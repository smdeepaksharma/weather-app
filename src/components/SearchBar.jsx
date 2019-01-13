import React from "react";
import {Button, ControlLabel, FormControl, FormGroup, Grid, InputGroup, Row} from "react-bootstrap";
import {getCurrentLocation} from "../services/CurrentLocation";

export default class SearchBar extends React.PureComponent {


    constructor(props) {
        super(props);

        this.onCurrentLocationSuccess = this.onCurrentLocationSuccess.bind(this);

        this.state = {
            value: ''
        }
    }

    handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.onSearch(this.state.value)
        }
    }

    onCurrentLocationSuccess(position) {
        this.props.onCurrentLocation(position.coords.latitude, position.coords.longitude)
    }

    onError(error) {

    }


    render() {

        return <div>
            <form>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Enter city name</ControlLabel>
                    <InputGroup>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Ex: San Diego"
                            onKeyPress={this.handleEnterKeyPress}
                            onChange={(e) => this.setState({value: e.target.value})}
                        />
                        <InputGroup.Button>
                            <Button
                                bsStyle="success"
                                onClick={() => this.props.onSearch(this.state.value)}
                            >
                                Search
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>

            <Button bsStyle="link" onClick={() => getCurrentLocation(this.onCurrentLocationSuccess, this.onError)}>OR CURRENT LOCATION</Button>

        </div>
    }


}