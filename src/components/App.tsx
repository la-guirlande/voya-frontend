import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GalleryPage from '../pages/gallery-page';
import { LoginPage } from './authentification/login-page';
import AuthenticationProvider from './context-providers/authentication-provider';
import { HomePage } from './home-page/home-page';

const App: React.FC = () => {
  const startDate = new Date(Date.UTC(2020, 8, 20, 0, 0, 0));
  const endDate = new Date(Date.UTC(2020, 8, 30, 3, 0, 0));

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
          <Route exact path="/gallery">
            <GalleryPage city="Tokyo" country="Japon" startDate={startDate} endDate={endDate} />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthenticationProvider>
  )
}

export default App;
