import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            star: [
                {
                    name: 'Nunki',
                    role: 'Star',
                    popularity: 5,
                }
            ],
            newStar: {
                name: '',
                role: '',
                popularity: ''
            }
        }
    }

    handleAll = (propertyName) => {
        return (event) => {
            this.setState({
                newStar: {
                    ...this.state.newStar,
                    [propertyName]: event.target.value
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
            star: [
                ...this.state.star,
                this.state.newStar
            ],
            newStar:{
                name:'',
                role:'',
                popularity: ''
            }
        })
    }


    render() {

        let starListArray = this.state.star.map((star,index) =>{
            return(
                <li key = {index}>
                My Name {star.name}, I'm Famous for {star.role}
                    . I have a {star.popularity} rating
                </li>
            )
        })

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <form onSubmit={this.clickHandle}>
                    <input placeholder="name" value={this.state.newStar.name} type="text" onChange={this.handleAll('name')} />
                    <input placeholder="role" value={this.state.newStar.role} type="text" onChange={this.handleAll('role')} />
                    <input placeholder="popularity" value={this.state.newStar.popularity} type="number" onChange={this.handleAll('popularity')} />
                    <input value="Click" type="submit" />
                </form>
                <ul className = "App-intro">
                    {starListArray}
                </ul>
            </div>
        );

    }

}


export default Header;