import React, { Component } from 'react';


class Joke extends Component {
    render () {
        return (
        //gets this from parent .state
            <p>{this.props.info}</p>
        )
    }
}


export default Joke;
