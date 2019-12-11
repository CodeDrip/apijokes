import React, { Component } from 'react';


class Joke extends Component {
    render () {
        return (
        //gets this from parent .state
        //can only be changed from parent. wont change itself
        <p>{this.props}</p>
        )
    }
}


export default Joke;
