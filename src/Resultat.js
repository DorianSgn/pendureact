import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Resultat.css';

class Resultat extends Component {

    render() {

      let nbLettres = [];
      for (var i = 0; i < localStorage.nbLettres; i++) {
        nbLettres.push(<label>_ </label>);
      }

      if(localStorage.partieGagnee == 1) {
        return (
          <div className="resultat">
            <p>Félicitations, vous avez gagné 🏆</p>
          </div>
        );
      } else {
        return (
          <div className="resultat">
            <p>Vous avez perdu...</p>
          </div>
        )
      }
  }
}

export default withRouter(Resultat);