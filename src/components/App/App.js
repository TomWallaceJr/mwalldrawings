import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import NotFound from '../NotFound/NotFound';
import NavBar from '../NavBar/NavBar';
import MainGallery from '../MainGallery/MainGallery';
import Pets from '../Pets/Pets';
import People from '../People/People';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <main className="page-container">
        <div className="content-wrap">
          <Header />
          <NavBar />
          <Switch>
            <LandingPage exact path={'/'} />
            <MainGallery path={'/maingallery'} />
            <Pets path={'/pets'} />
            <People path={'/people'} />
            <AboutMe path={'/aboutme'} />
            <ContactMe path={'/contactme'} />
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
