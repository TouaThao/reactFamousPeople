import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {




    // handleStarName = (event) => {

    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             name: event.target.value
    //         }
    //     })
    // }
    // handleStarRole = (event) => {
    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             role: event.target.value
    //         }
    //     })
    // }




    render() {


        return (
            
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>




        );

    }

}


export default Header;