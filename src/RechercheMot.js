import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './RechercheMot.css';

import {decrementAction} from './action';

class RechercheMot extends Component {

    constructor(props) {
      super(props);
      this.state = {lettre: '', nbChances: '', nbLettresATrouver: localStorage.nbLettres};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDecrement = () => {
      decrementAction();
    }

    handleSubmit() {
      if(localStorage.mot.includes(this.state.lettre)) {
          alert("ya un " + this.state.lettre);
          this.state.nbLettresATrouver -= 1;
      } else {
        localStorage.nbChances -= 1;
      }
      
      if(localStorage.nbChances == 0 && this.state.nbLettresATrouver != 0) {
        localStorage.partieGagnee = 0;
        this.nextPath('/resultat');
      } else if(this.state.nbLettresATrouver == 0) {
        localStorage.partieGagnee = 1;
        this.nextPath('/resultat');
      }
    }

    handleChange(event) {
      this.setState({
        lettre: event.target.value
      });
    }

    nextPath(path) {
      this.props.history.push(path);
    }
    
    render() {

      let nbLettres = [];
      for (var i = 0; i < localStorage.nbLettres; i++) {
        nbLettres.push(<label>_ </label>);
      }

      return (
        <div className="rechercheMot">
            <p>Nombre d'essais : {localStorage.nbChances} </p>
            <p>{nbLettres}</p>

            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Entrez une lettre" value={this.state.lettre} onChange={this.handleChange}></input>
                <input type="submit" value="Essayer"/>
            </form>
            
        </div>
      );
    }

}

export default withRouter(RechercheMot);