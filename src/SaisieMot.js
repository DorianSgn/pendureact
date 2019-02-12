import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './SaisieMot.css';

class SaisieMot extends Component {

  constructor(props) {
    super(props);
    this.state = {mot: '', nbChances: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleNbChancesChange = this.handleNbChancesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      mot: event.target.value
    });
  }

  handleNbChancesChange(event) {
    this.setState({
      nbChances: event.target.value
    })
  }

  handleSubmit(event) {
    if(!isNaN(this.state.nbChances)) {
      alert('Mot à trouver : ' + this.state.mot + ', en ' + this.state.nbChances + ' essais');
      event.preventDefault();
      this.getNbChances();
      this.getNbLettres();
      this.getMot();
      this.nextPath('/rechercheMot');
    } else {
      alert("Veuillez rentrer un nombre d'essais valide.")
    }
    
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  getNbChances() {
    return localStorage.nbChances = this.state.nbChances;
  }

  getMot() {
    return localStorage.mot = this.state.mot;
  }

  getNbLettres() {
    return localStorage.nbLettres = this.state.mot.length;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Mot à trouver :
          <input type="text" value={this.state.mot} onChange={this.handleChange} />
        </label> <br></br>
        <label>
          Nombres de chances :
          <input type="text" value={this.state.nbChances} onChange={this.handleNbChancesChange} />
        </label> <br></br>
        <input type="submit" value="Jouer" />
      </form>
    );
  }
}

export default withRouter(SaisieMot);
