import React, { Component } from 'react';
import './App.css';






class App extends Component {
    //adding bc we changin the state
    constructor() {
      super()
      this.state = {
        apiData: []
      } 
    }
    
    componentDidMount() {
      fetch(' https://icanhazdadjoke.com/', {
        headers: { Accept: "application/json"}
      })
      .then(res => res.json())
      .then(res => {
        // console.log(res.joke)
        this.setState({ apiData: res})
        // console.log({ apiData: res})
        // console.log(this.state.apiData)
        console.log(this.state.apiData.joke)    
      })
    }

  render() {
    let actualJoke = this.state.apiData.joke
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DAD JOKIE JOKES</h1>
        </header>
        <div>
          {actualJoke}
        </div>
      </div>
    );
  }
}

export default App;
