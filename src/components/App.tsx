import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GalleryPage from '../pages/gallery-page';
import TripsPage from '../pages/trips-page';
import { LoginPage } from './authentification/login-page';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';

const App: React.FC = () => {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/gallery/:journeyId">
            <GalleryPage />
          </Route>
          <Route exact path="/trips">
            <TripsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;
