import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            star: {
                name: '',
                role: '',
                popularity: ''
            }
        }
    }

    handleAll = (propertyName) =>{
        return(event)=>{
            this.setState({
                star:{
                    ...this.state.star,
                    [propertyName] : event.target.value
                }
            })
        }
    }

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

    clickHandle = (event) => {
        console.log(this.state)
        event.preventDefault();
        this.setState({
            star:{
                name: '',
                role: '',
                popularity: ''
            }
        })
    }


    render() {
    

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>My Name {this.state.star.name}, I'm Famous for {this.state.star.role}
                        . I have a {this.state.star.popularity} rating </p>
                <form onSubmit={this.clickHandle}>
                <input value={this.state.star.name} type="text" onChange={this.handleAll('name')} />
                <input value={this.state.star.role} type="text" onChange={this.handleAll('role')} />
                <input value={this.state.star.popularity}  type="number" onChange={this.handleAll('popularity')} />
                <input value="Click" type="submit"/>
                </form>
            </div>
        )

    }

}


export default Header;