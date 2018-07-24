import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

    constructor(people) {
        super(people)
        this.state = {
            star: {
                name: '',
                role: '',
            }
        }
    }

    handleStarName = (event) => {
        
        this.setState({
            star: {
                ...this.state.star,
                name: event.target.value
            }
        })
    }
    handleStarRole = (event) => {
        this.setState({
            star: {
                ...this.state.star,
                role: event.target.value
            }
        })
    }

    clickHandle = () => {
        console.log(this.state)
    }


    render() {


        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>My Name {this.state.star.name}, I'm Famous for {this.state.star.role}</p>
                <input type="text" onChange={this.handleStarName} />
                <input type="text" onChange={this.handleStarRole} />
                <button onClick={this.clickHandle}>click</button>
            </div>
        )

    }

}


export default Header;