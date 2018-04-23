import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key="login" component={LoginForm} hideNavBar initial />
        <Scene key="createAccount" component={CreateAccount} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
