import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <LandingPage exact path={'/'} />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
