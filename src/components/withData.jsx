import React from "react";
import Loading from "./Loading";
import RestAPI from "../services/RestAPI";

function withData(WrappedComponent, dataParams) {

    class WrapperComponent extends React.PureComponent {

        state = {
            data: null
        };

        componentDidMount() {
            console.log(this.props)

            let url = dataParams.endPoint(dataParams.params({...this.props}));
            RestAPI.get(url).then((response) => {
                this.setState({data: response.data})
            })
        }

        componentWillReceiveProps(newProps, oldProps) {
            console.log('newProps', newProps)
            let url = dataParams.endPoint(dataParams.params({...newProps}));
            RestAPI.get(url).then((response) => {
                this.setState({data: response.data})
            })
        }

        render() {
            if (this.state.data == null) {
                return <Loading/>
            } else {
                return <WrappedComponent {...this.state}/>
            }
        }
    }

    return WrapperComponent
}


export default withData;