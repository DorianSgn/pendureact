import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './App.css';

class App extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {

    return (
      <div className="App">
        
        <label className="bienvenue">Bienvenue au jeu du pendu !</label> <br></br>
        <button className="jouer" onClick={ () => this.nextPath('/saisieMot') }> Jouer</button>

      </div>
    );
  }
}

export default withRouter(App);
