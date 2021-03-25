import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';

const App: React.FC = () => {
  return (
    <AuthenticationProvider>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>

    </AuthenticationProvider>
  )
}

export default App;
