import React, { Component } from "react";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMsg: '',
        info: null
    }
    
    componentDidCatch = (error,info) => {
        this.setState({hasError: true, errorMsg: error, info: info});
       // console.log(info);
        console.log(error);
    }
    //<h3> {this.state.info.} </h3>
    // <h2> {this.state.errorMsg} </h2>
    render() {
        if(this.state.hasError){
            return(
                <div>
                    <h1> Something went wrong !!!</h1>
                </div>
            ) ;
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundry;