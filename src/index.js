import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import SaisieMot from './SaisieMot';
import RechercheMot from './RechercheMot';
import Resultat from './Resultat';

import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer';
import { reducer as formReducer } from 'redux-form';
import { Router, Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

const rootReducer = combineReducers({
    nbChances: reducer,
    form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
<HashRouter>
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/saisieMot' exact component={SaisieMot} />
        <Route path='/rechercheMot' exact component={RechercheMot} />
        <Route path='/resultat' exact component={Resultat} />
    </Switch>
</HashRouter>
    
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
