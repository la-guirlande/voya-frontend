import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './authentification/login-page';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';

const App: React.FC = () => (
  <AuthenticationProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </AuthenticationProvider>
)

export default App;
