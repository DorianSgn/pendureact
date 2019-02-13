import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './RechercheMot.css';
import { Field, reduxForm } from 'redux-form';

class RechercheMot extends Component {

    constructor(props) {
      super(props);
      this.state = {lettre: '', nbChances: '', nbLettresATrouver: localStorage.nbLettres};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleDecrement = this.handleDecrement.bind(this);
    }

    /*handleDecrement = () => {
      const {dispatch} = this.props;
      const action = decrementAction();
      dispatch(action);
    }*/

    handleSubmit() {
      if(localStorage.mot.includes(this.state.lettre)) {
        alert("Il y a bien un " + this.state.lettre);
        this.state.nbLettresATrouver -= 1;
      } else {
        //this.handleDecrement();
        alert("Il n'y a pas de " + this.state.lettre);
        localStorage.nbChances -= 1;
      }
      
      if(localStorage.nbChances == 0 && this.state.nbLettresATrouver != 0) { // partie perdue
        localStorage.partieGagnee = 0;
        this.nextPath('/resultat');
      } else if(this.state.nbLettresATrouver == 0) { // partie gagnee
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

/*function mapStateFromProps(reduxStore) {
  return {
      nbChances: reduxStore.nbChances
  };
}

export const Connect = connect(mapStateFromProps) (RechercheMot);*/

export default withRouter(reduxForm({
  form: 'SaisieLettresForm'
})(RechercheMot));
