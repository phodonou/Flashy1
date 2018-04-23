import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import RouterComponent from './Router';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
   const config = {
     apiKey: 'AIzaSyBJj9uuApGVdd_J523O1sH3IeWaRuLZXsE',
     authDomain: 'flashy-8233e.firebaseapp.com',
     databaseURL: 'https://flashy-8233e.firebaseio.com',
     projectId: 'flashy-8233e',
     storageBucket: 'flashy-8233e.appspot.com',
     messagingSenderId: '239439216597'
   };
   firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
