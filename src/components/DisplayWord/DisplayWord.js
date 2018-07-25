import React, {Component} from 'react';


class DisplayWord extends Component {



    render() {
      return (
        
        <div>Hi,My Name is{this.props.currentWord.name} I'm Famous
                for {this.props.currentWord.role}. My star rating is{this.props.currentWord.popularity} </div>
  
      );
    }
  }
  export default DisplayWord;