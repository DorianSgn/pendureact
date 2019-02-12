import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Resultat.css';

class Resultat extends Component {

    nextPath(path) {
      this.props.history.push(path);
    }

    render() {

      if(localStorage.partieGagnee == 1) {
        return (
          <div className="resultat">
            <p>Félicitations, vous avez gagné 🏆</p>
            <button className="jouer" onClick={ () => this.nextPath('/') }> Rejouer</button>
          </div>
        );
      } else {
        return (
          <div className="resultat">
            <p>Vous avez perdu...</p>
            <button className="jouer" onClick={ () => this.nextPath('/') }> Rejouer</button>
          </div>
        )
      }
  }
}

export default withRouter(Resultat);