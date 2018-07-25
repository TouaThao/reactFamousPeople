import React, { Component } from 'react';
import Header from '../header/Header'
import StarList from '../StarList/StarList'
import NewStar from '../NewStar/NewStar'
import DisplayWord from '../DisplayWord/DisplayWord'
import './App.css';

class App extends Component {

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
    return (
      <div className="App">
        <Header />
       <DisplayWord currentWord = {this.state.newStar}/>
        <NewStar newStarForm={this.state.newStar}
        handleAll = {this.handleAll}
        clickHandle = {this.clickHandle} />
        <StarList listOfStars={this.state.star} />
      </div>
    )
  }
}



export default App;
