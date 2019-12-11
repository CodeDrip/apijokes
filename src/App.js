import React, { Component } from 'react';
import './App.css';
import Joke from "./Joke.js"  
import NewButton from "./NewButton.js"  






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
  
        this.setState({ apiData: res})
        console.log(this.state.apiData.joke)    
      })
    }

  render() {
    let actualJoke = this.state.apiData.joke
    // let buttonNew = 
    
    // .map(target => {
    //   return <Joke />
    // })
    
    
    
    //.joke
    
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">JOKIE JOKES</h1>
        </header>
        <main>
          <article className="joke-container">
            <Joke info = {actualJoke}/>
          </article>
          <button onClick={() => {
            
          }}>New</button>
        </main>

      </div>
    );
  }
}

export default App;
