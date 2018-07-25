import React, {Component} from 'react';


class NewStar extends Component{


    render(){
        return(
            <form onSubmit={this.props.clickHandle}>
            <input placeholder="name" value={this.props.newStarForm.name} type="text" onChange={this.props.handleAll('name')} />
            <input placeholder="role" value={this.props.newStarForm.role} type="text" onChange={this.props.handleAll('role')} />
            <input placeholder="popularity" value={this.props.newStarForm.popularity} type="number" onChange={this.props.handleAll('popularity')} />
            <input value="Click" type="submit" />
        </form>
        );
    }
}


export default NewStar;