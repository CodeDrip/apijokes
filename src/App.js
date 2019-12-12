import React, { Component } from 'react';
import './App.css';
import Joke from "./Joke.js"  






class App extends Component {
    //adding bc we changin the state
    constructor() {
      super()
      this.state = {
        apiData: []
      }
      this.handleClick = this.handleClick.bind(this) 
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

     handleClick() {
      console.log(`We Got Action`);
      this.componentDidMount();
    }

  render() {
    
    let actualJoke = this.state.apiData.joke
    
    
      


    
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">DAD JOKIE JOKES</h1>
        </header>
        <main>
          <article className="joke-container">
            <Joke info = {actualJoke}/>
          </article>
          <button onClick={this.handleClick}>New Joke</button>
        </main>
      </div>
    );
  }
}

export default App;



  //   componentDidMount() {
  //     this.getPromise()
  //  }

  // this.getPromise() {
  //   fetch(' https://icanhazdadjoke.com/', {
  //       headers: { Accept: "application/json"}
  //     })
  //     .then(res => res.json())
  //     .then(res => {
  
  //       this.setState({ apiData: res})
  //       console.log(this.state.apiData.joke)    
  //     })
  //   }






// this work too

//   componentDidMount() {
//     fetch(' https://icanhazdadjoke.com/', {
//       headers: { Accept: "application/json"}
//     })
//     .then(res => res.json())
//     .then(res => {

//       this.setState({ apiData: res})
//       console.log(this.state.apiData.joke)    
//     })
//   }