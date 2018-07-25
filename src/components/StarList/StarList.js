import React, { Component } from 'react';
class StarList extends Component {
    render() {


        let starListArray = this.props.listOfStars.map((star, index) => {
            return (
                <li key={index}>
                    My Name {star.name}, I'm Famous for {star.role}
                    . My star rating is {star.popularity}
                </li>
            )
        })


        return (

            <ul className="App-intro">
                {starListArray}
            </ul>

        );
    }
}
export default StarList;